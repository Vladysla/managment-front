import {
    FETCH_COLORS,
    FETCH_PLACES,
    FETCH_PRODUCTS_SUM_START,
    FETCH_PRODUCTS_SUM,
    FETCH_PRODUCTS_SUM_FAILURE,
    FETCH_SIZES,
    FETCH_TYPES,
    CLEAR_PRODUCTS, FETCH_MODELS,
    FETCH_PLACES_START,
    FETCH_TYPES_START,
} from './actionTypes'

const initialState = {
    data: [],
    places: [],
    types: [],
    sizes: [],
    colors: [],
    products: [],
    productsIsLoading: true,
    productsError: false,
    placesLoading: true,
    typesLoading: true,
};

const productsReducer = function (state = initialState, {type, payload}) {
    switch (type) {

        case FETCH_PRODUCTS_SUM_START: {
            return {
                ...state,
                data: [],
                productsIsLoading: true
            }
        }

        case FETCH_PRODUCTS_SUM: {
            return {
                ...state,
                ...payload.data,
                productsIsLoading: false
            }
        }

        case FETCH_PRODUCTS_SUM_FAILURE: {
            return {
                ...state,
                productsError: payload.productsError,
                productsIsLoading: false
            }
        }

        case FETCH_PLACES_START: {
            return {
                ...state,
                places: [],
                placesLoading: true,
            }
        }

        case FETCH_PLACES: {
            return {
                ...state,
                places: payload,
                placesLoading: false,
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

        case FETCH_TYPES_START: {
            return {
                ...state,
                types: [],
                typesLoading: true,
            }
        }

        case FETCH_TYPES: {
            return {
                ...state,
                types: payload,
                typesLoading: false,
            }
        }

        case FETCH_MODELS: {
            return {
                ...state,
                models: payload
            }
        }

        case CLEAR_PRODUCTS: {
            return {
                ...initialState
            }
        }

        default:
            return state
    }
};

export default productsReducer