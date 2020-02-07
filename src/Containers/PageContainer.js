import React, { Component } from 'react'
import {
    compose,
    bindActionCreators
} from 'redux'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import axios, {dataUrl} from '../API'

import {
    ComponentWrapper,
    ContainerWrapper
} from './Components'

import {
    showSidebar,
    hideSidebar,
    saveCurrency,
    showAlert,
    closeAlert,
    logout,
} from '../Store/Modules/LocalSettings/actions'

import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import Alert from '../Components/Alert';

const PageContainer = WrappedComponent => class extends Component {
    intervalTimer = null;

    async componentDidMount() {
        this.loadCurrency(this.props.currency);
        this.showIncomeCount();
        this.intervalTimer = setInterval(this.showIncomeCount, 7000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalTimer);
    }

    state = {
        transferCount: 0,
        transferLoading: true,
    };

    setCurrency = async date => {
        try {
            const response = await axios.get(`${dataUrl}/currency`);
            return { date, value: +response.data };
        } catch (e) {
            console.warn(e)
        }
    };

    showIncomeCount = async () => {
        if (!this.props.user) return;
        this.setState({ transferLoading: true });
        try {
            const response = await axios.post(`${dataUrl}/my/transfer/count`, {
                place_id: this.props.user.place_id
            });
            this.setState({ transferCount: +response.data, transferLoading: false });
        } catch (e) {
            this.setState({ transferLoading: false });
            console.warn(e);
        }
    };

    loadCurrency = (currency) => {
        const now = new Date().toLocaleDateString();

        if(currency && (currency.date === now)) {
            return;
        }

        this.setCurrency(now).then(data => this.props.saveCurrency(data))
    };

    render() {
        const {
            isAuthorized,
            error,
            ...otherProps
        } = this.props;

        return (
            !isAuthorized
                ? <Redirect to='/login' />
                : (
                    <ContainerWrapper fluid style={{padding: 0}}>
                        <Header />
                        {otherProps.alert.show && (
                            <Alert alert={otherProps.alert} closeAlert={otherProps.closeAlert} />
                        )}
                        <Sidebar
                            logout={this.props.logout}
                            hideSidebar={this.props.hideSidebar}
                            isSidebarShown={this.props.isSidebarShown}
                            userRole={this.props.user.role}
                            transferCount={this.state.transferCount}
                            theme={this.props.theme}
                        />
                        <ComponentWrapper isSidebarShown={this.props.isSidebarShown}>
                            <WrappedComponent
                                { ...otherProps }
                                transferCount={this.state.transferCount}
                                transferLoading={this.state.transferLoading}
                            />
                        </ComponentWrapper>
                    </ContainerWrapper>
                )
        )
    }
};

const mapStateToProps = state => ({
    isSidebarShown: state.localSettings.isSidebarShown,
    isAuthorized: state.localSettings.authorizationToken,
    error: state.localSettings.error,
    currency: state.localSettings.currency,
    alert: state.localSettings.alert,
    user: state.localSettings.user,
    theme: state.localSettings.theme,
});

const mapDispatchToProps = dispatch => ({
    showSidebar: () => dispatch(showSidebar()),
    hideSidebar: () => dispatch(hideSidebar()),
    saveCurrency: (currency) => dispatch(saveCurrency(currency)),
    showAlert: (message, type, variant) => dispatch(showAlert(message, type, variant)),
    closeAlert: () => dispatch(closeAlert()),
    ...bindActionCreators({
        logout
    }, dispatch),
});

const pageContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    PageContainer
);

export default pageContainer