import React, { useEffect } from 'react'
import {
    compose
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
    saveCurrency
} from '../Store/Modules/LocalSettings/actions'

import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'

const PageContainer = WrappedComponent => props => {
    const setCurrency = async date => {
        try {
            const response = await axios.get(`${dataUrl}/currency`);
            return { date, value: +response.data };
        } catch (e) {
            console.warn(e)
        }
    };

    const loadCurrency = (currency) => {
        const now = new Date().toLocaleDateString();

        if(currency && (currency.date === now)) {
            return;
        }

        setCurrency(now).then(data => props.saveCurrency(data))
    };
    const {
        isAuthorized,
        error,
        ...otherProps
    } = props;

    useEffect(() => {
        loadCurrency(props.currency);
    }, [])

    return (
        !isAuthorized
            ? <Redirect to='/login' />
            : (
                <ContainerWrapper fluid style={{padding: 0}}>
                    <Header />
                    <Sidebar isSidebarShown={props.isSidebarShown}/>
                    <ComponentWrapper isSidebarShown={props.isSidebarShown}>
                        <WrappedComponent { ...otherProps } />
                    </ComponentWrapper>
                </ContainerWrapper>
            )
    )
}

const mapStateToProps = state => ({
    isSidebarShown: state.localSettings.isSidebarShown,
    isAuthorized: state.localSettings.authorizationToken,
    error: state.localSettings.error,
    currency: state.localSettings.currency
});

const mapDispatchToProps = dispatch => ({
    showSidebar: () => dispatch(showSidebar()),
    hideSidebar: () => dispatch(hideSidebar()),
    saveCurrency: (currency) => dispatch(saveCurrency(currency)),
});

const pageContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    PageContainer
);

export default pageContainer