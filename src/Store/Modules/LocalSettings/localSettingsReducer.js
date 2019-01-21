import {
    SHOW_SIDEBAR,
    HIDE_SIDEBAR,
    SIGN_IN,
    LOGOUT
} from "./actionTypes";

const initialState = {
    isSidebarShown: false,
    sidebarType: null,
    id: null,
    authorizationToken: null,
    user: null
}

const localSettingsReducer = function (state = initialState, { type, payload }) {
    switch (type) {
        case SHOW_SIDEBAR: {
            const data = {
                sidebarType: null,
                id: null,
                isSidebarShown: true,
                ...payload
            }

            return { ...state, ...data }
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

        default:
            return state
    }
}

export default localSettingsReducer