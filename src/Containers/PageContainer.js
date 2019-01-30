import React from 'react'
import {
    compose,
    bindActionCreators
} from 'redux'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import {
    showSidebar,
    hideSidebar
} from '../Store/Modules/LocalSettings/actions'

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
                <div>
                    PageContainer
                    <WrappedComponent { ...otherProps } />
                </div>
            )
    )
}

const mapStateToProps = state => ({
    isSidebarShown: state.localSettings.isSidebarShown,
    isAuthorized: state.localSettings.authorizationToken,
    error: state.localSettings.error
})

const mapDispatchToProps = dispatch => ({
    showSidebar: (sidebarType, id) => dispatch(showSidebar(sidebarType, id)),
    hideSidebar: () => dispatch(hideSidebar())
})

const pageContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    PageContainer
)

export default pageContainer