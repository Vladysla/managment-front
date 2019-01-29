import _ from 'lodash'

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
                ...payload.data
            }
        }

        default:
            return state
    }
}

export default productsReducer