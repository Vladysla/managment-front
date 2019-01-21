import uuid from 'uuid'

import {
    HIDE_SIDEBAR,
    SHOW_SIDEBAR,
    SIGN_IN,
    LOGOUT
} from "./actionTypes";

export const hideSidebar = () => ({ type: HIDE_SIDEBAR })
export const showSidebar = (sidebarType, id = uuid(), additionalData = {}) => ({
    type: SHOW_SIDEBAR,
    payload: {
        sidebarType,
        id,
        ...additionalData
    }
})

export const signIn = (token, user) => ({
    type: SIGN_IN,
    payload: {
        authorizationToken: token,
        user
    }
})

export const logout = () => ({ type: LOGOUT })