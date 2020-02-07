import {
    FETCH_SEPARATE_PRODUCTS_START,
    FETCH_SEPARATE_PRODUCTS,
    FETCH_SEPARATE_PRODUCTS_FAILURE,
    TRANSFER_PRODUCTS,
    CLEAR_SEPARATED_PRODUCTS,
    SELL_PRODUCTS
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

        case TRANSFER_PRODUCTS: {

            const arrIds = payload.data.transferred.reduce((acc, transItem) => ([...acc, transItem.product_id]), []);

            return {
                ...state,
                data: state.data.map(item => {
                    return item
                })
            }
        }

        case CLEAR_SEPARATED_PRODUCTS: {
            return {
                ...initialState
            }
        }

        case SELL_PRODUCTS: {
            return {
                ...state,
                data: state.data.filter(product => !payload.data.includes(product.sum_id))
            }
        }

        default:
            return state;
    }
}

export default separatedProductsReducer