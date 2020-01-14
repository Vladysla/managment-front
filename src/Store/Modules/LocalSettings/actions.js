import axios, { dataUrl } from '../../../API';
import {
    HIDE_SIDEBAR,
    SHOW_SIDEBAR,
    SIGN_IN,
    LOGOUT,
    SAVE_CURRENCY,
    SHOW_ALERT,
    CLOSE_ALERT
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

export const logout = () => dispatch =>
    axios.get(`${dataUrl}/logout`)
        .then(resp => dispatch({ type: LOGOUT }))
        .catch(console.warn);

export const saveCurrency = (currObj) => ({ type: SAVE_CURRENCY, payload: { currency: currObj || {date: '', value: 1} }})

export const showAlert = (message, type, variant) => ({ type: SHOW_ALERT, payload: {message, type, variant} });
export const closeAlert = () => ({ type: CLOSE_ALERT });