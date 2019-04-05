import {
    FETCH_SEPARATE_PRODUCTS_START,
    FETCH_SEPARATE_PRODUCTS,
    FETCH_SEPARATE_PRODUCTS_FAILURE
} from './actionTypes';

const initialState = {
    data: [],
    productsIsLoading: true,
    productsError: false
}

const separatedProductsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_SEPARATE_PRODUCTS_START: {
            return {
                ...state,
                data: [],
                productsIsLoading: true
            }
        }

        case FETCH_SEPARATE_PRODUCTS: {
            return {
                ...state,
                ...payload.data,
                productsIsLoading: false
            }
        }

        case FETCH_SEPARATE_PRODUCTS_FAILURE: {
            return {
                ...state,
                productsError: payload.productsError,
                productsIsLoading: false
            }
        }

        default:
            return state;
    }
}

export default separatedProductsReducer