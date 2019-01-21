import {
    FETCH_PRODUCTS
} from './actionTypes'

const initialState = {
    data: []
}

const productsReducer = function (state = initialState, {type, payload}) {
    switch (type) {

        case FETCH_PRODUCTS: {
            return {
                ...state,
                data: [...state.data, ...payload.data]
            }
        }

        default:
            return state
    }
}

export default productsReducer