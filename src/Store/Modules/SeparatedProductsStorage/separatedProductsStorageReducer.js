import {
    FETCH_TRANSFER_INCOME,
    FETCH_TRANSFER_HISTORY,
    TRANSFER_CANCEL,
    TRANSFER_APPLY,
    CLEAR_SEPARATED_PRODUCTS_STORAGE,
    FETCH_SELL_HISTORY
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

        case FETCH_TRANSFER_HISTORY:
            return {
                ...state,
                ...payload.data,
                productsIsLoading: false
            };

        case TRANSFER_APPLY:
            return {
                ...state,
                data: state.data.filter(transfer => transfer.id !== payload.data.id)
            };

        case TRANSFER_CANCEL:
            return {
                ...state,
                data: state.data.filter(transfer => transfer.id !== payload.data.id)
            };

        case CLEAR_SEPARATED_PRODUCTS_STORAGE:
            return {
                ...inintialState
            };

        case FETCH_SELL_HISTORY:
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