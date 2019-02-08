
import {
    HIDE_SIDEBAR,
    SHOW_SIDEBAR,
    SIGN_IN,
    LOGOUT,
    SAVE_CURRENCY
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

export const saveCurrency = (currObj) => ({ type: SAVE_CURRENCY, payload: { currency: currObj || {date: '', value: 1} }})