import {
    SHOW_SIDEBAR,
    HIDE_SIDEBAR,
    SIGN_IN,
    LOGOUT,
    SAVE_CURRENCY,
    SHOW_ALERT,
    CLOSE_ALERT
} from "./actionTypes";

const initialState = {
    isSidebarShown: false,
    sidebarType: null,
    id: null,
    authorizationToken: null,
    user: null,
    currency: {
        date: '',
        value: 1
    },
    alert: {
        show: false,
        message: ''
    },

}

const localSettingsReducer = function (state = initialState, { type, payload }) {
    switch (type) {
        case SHOW_SIDEBAR: {
            return {
                ...state,
                isSidebarShown: true
            }
        }

        case HIDE_SIDEBAR: {
            return {
                ...state,
                isSidebarShown: false
            }
        }

        case SIGN_IN: {
            return { ...state, ...payload }
        }

        case SAVE_CURRENCY: {
            return { ...state, ...payload }
        }

        case SHOW_ALERT: {
            return {
                ...state, alert: {
                    show: true,
                    message: payload.message,
                    type: payload.type
                }
            }
        }

        case CLOSE_ALERT: {
            return {
                ...state,
                alert: {
                    show: false,
                    message: '',
                    type: ''
                }
            }
        }

        default:
            return state
    }
}

export default localSettingsReducer