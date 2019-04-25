import axios, { dataUrl } from '../../../API'
import qs from 'query-string'

import {
    FETCH_TRANSFER_INCOME,
    FETCH_TRANSFER_HISTORY,
    TRANSFER_APPLY,
    TRANSFER_CANCEL,
    CLEAR_SEPARATED_PRODUCTS_STORAGE,
    FETCH_SELL_HISTORY
} from './actionTypes'


export const loadTransferIncomeProducts = queryParams => async dispatch => {
    try {
        const { data } = await axios.get(`${dataUrl}/my/transfer/get?${qs.stringify(queryParams)}`);
        dispatch({ type: FETCH_TRANSFER_INCOME, payload: {data} })
    } catch (err) {
        console.log(err)
    }
};

export const loadTransferHistoryProducts = queryParams => dispatch => {
    for (let paramKey in queryParams) {
        (queryParams[paramKey] === "" || queryParams[paramKey] === null || queryParams[paramKey] === undefined) && delete queryParams[paramKey]
    }
    return axios.get(`${dataUrl}/my/transfer/history?${qs.stringify(queryParams)}`)
        .then(({ data }) => {
            dispatch({ type: FETCH_TRANSFER_HISTORY, payload: {data} })
        })
}

export const applyTransfer = transfer_id => dispatch => {
    return axios.post(`${dataUrl}/my/transfer/apply`, { transfer_id })
        .then(({ data }) => {
            dispatch({ type: TRANSFER_APPLY, payload: {data} })
        })
};

export const cancelTransfer = transfer_id => dispatch => {
    return axios.post(`${dataUrl}/my/transfer/cancel`, { transfer_id })
        .then(({ data }) => {
            dispatch({ type: TRANSFER_CANCEL, payload: {data} })
        })
};

export const loadSoldHistoryProducts = (queryParams) => dispatch => {
    for (let paramKey in queryParams) {
        (queryParams[paramKey] === "" || queryParams[paramKey] === null || queryParams[paramKey] === undefined) && delete queryParams[paramKey]
    }

    return axios.get(`${dataUrl}/my/sell/history?${qs.stringify(queryParams)}`)
        .then(({data}) => dispatch({ type: FETCH_SELL_HISTORY, payload: { data } }))
};

export const clearSeparatedProductsStorage = () => dispatch => dispatch(CLEAR_SEPARATED_PRODUCTS_STORAGE);