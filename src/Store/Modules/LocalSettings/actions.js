
import {
    HIDE_SIDEBAR,
    SHOW_SIDEBAR,
    SIGN_IN,
    LOGOUT
} from "./actionTypes";

export const hideSidebar = () => ({ type: HIDE_SIDEBAR })
export const showSidebar = () => ({ type: SHOW_SIDEBAR })

export const signIn = (token, user) => ({
    type: SIGN_IN,
    payload: {
        authorizationToken: token,
        user
    }
})

export const logout = () => ({ type: LOGOUT })