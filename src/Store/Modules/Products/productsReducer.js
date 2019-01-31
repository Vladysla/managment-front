import _ from 'lodash'

import {
    FETCH_COLORS,
    FETCH_PLACES,
    FETCH_PRODUCTS,
    FETCH_PRODUCTS_SUM, FETCH_SIZES, FETCH_TYPES
} from './actionTypes'

const initialState = {
    data: [],
    places: [],
    types: [],
    sizes: [],
    colors: [],
    products: [],
}

const productsReducer = function (state = initialState, {type, payload}) {
    switch (type) {

        case FETCH_PRODUCTS_SUM: {
            return {
                ...state,
                ...payload.data
            }
        }

        case FETCH_PLACES: {
            return {
                ...state,
                places: payload
            }
        }

        case FETCH_SIZES: {
            return {
                ...state,
                sizes: payload
            }
        }

        case FETCH_COLORS: {
            return {
                ...state,
                colors: payload
            }
        }

        case FETCH_TYPES: {
            return {
                ...state,
                colors: payload
            }
        }

        default:
            return state
    }
}

export default productsReducer