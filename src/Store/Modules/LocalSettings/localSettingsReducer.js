import {
    SHOW_SIDEBAR,
    HIDE_SIDEBAR,
    SIGN_IN,
    LOGOUT,
    SAVE_CURRENCY
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
    }
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

        default:
            return state
    }
}

export default localSettingsReducer