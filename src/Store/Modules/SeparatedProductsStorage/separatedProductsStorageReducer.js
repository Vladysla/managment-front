import {
    FETCH_TRANSFER_INCOME,
} from './actionTypes'


const inintialState = {
    data: [],
    productsIsLoading: true,
    productsError: false
}

const separatedProductsStorageReducer = function (state = inintialState, { type, payload }) {
    switch (type) {
        case FETCH_TRANSFER_INCOME:
            return {
                ...state,
                ...payload.data,
                productsIsLoading: false
            };

        default:
            return state;
    }
}

export default separatedProductsStorageReducer