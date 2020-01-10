import {
    FETCH_PRODUCT,
    CLEAR_PRODUCT,
    ADD_PRODUCT
} from './actionTypes'

const initialState = {}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_PRODUCT: {
            return payload
        }

        case CLEAR_PRODUCT: {
            return {}
        }

        case ADD_PRODUCT: {
            return payload
        }

        default: return state
    }
}