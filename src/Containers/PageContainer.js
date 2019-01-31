import React from 'react'
import {
    compose
} from 'redux'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import {
    Container,
    ContentWrapper,
    ComponentWrapper
} from './Components'

import {
    showSidebar,
    hideSidebar
} from '../Store/Modules/LocalSettings/actions'

import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'

const PageContainer = WrappedComponent => props => {
    const {
        isAuthorized,
        error,
        ...otherProps
    } = props
    return (
        !isAuthorized
            ? <Redirect to='/login' />
            : (
                <Container>
                    <ContentWrapper>
                        <Header />
                        <Sidebar isSidebarShown={props.isSidebarShown}/>
                        <ComponentWrapper isSidebarShown={props.isSidebarShown}>
                            <WrappedComponent { ...otherProps } />
                        </ComponentWrapper>
                    </ContentWrapper>
                </Container>
            )
    )
}

const mapStateToProps = state => ({
    isSidebarShown: state.localSettings.isSidebarShown,
    isAuthorized: state.localSettings.authorizationToken,
    error: state.localSettings.error
})

const mapDispatchToProps = dispatch => ({
    showSidebar: () => dispatch(showSidebar()),
    hideSidebar: () => dispatch(hideSidebar())
})

const pageContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    PageContainer
)

export default pageContainer