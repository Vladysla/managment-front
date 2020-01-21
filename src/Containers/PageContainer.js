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

const PageContainer = WrappedComponent => class extends Component {
    componentDidMount() {
        this.loadCurrency(this.props.currency);
    }

    setCurrency = async date => {
        try {
            const response = await axios.get(`${dataUrl}/currency`);
            return { date, value: +response.data };
        } catch (e) {
            console.warn(e)
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
                        <Sidebar
                            logout={this.props.logout}
                            hideSidebar={this.props.hideSidebar}
                            isSidebarShown={this.props.isSidebarShown}
                            userRole={this.props.user.role}
                        />
                        <ComponentWrapper isSidebarShown={this.props.isSidebarShown}>
                            <WrappedComponent { ...otherProps } />
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
    user: state.localSettings.user
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