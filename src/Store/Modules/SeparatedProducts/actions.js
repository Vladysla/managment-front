import axios, { dataUrl } from '../../../API'
import qs from 'query-string'

import {
    FETCH_SEPARATE_PRODUCTS,
    FETCH_SEPARATE_PRODUCTS_START,
    FETCH_SEPARATE_PRODUCTS_FAILURE,
    CLEAR_SEPARATED_PRODUCTS,
    TRANSFER_PRODUCTS,
    SELL_PRODUCTS
} from './actionTypes';

import {
    showAlert
} from '../LocalSettings/actions'

export const loadSeparateProducts = (queryParams, sold) => async dispatch => {
    for (let paramKey in queryParams) {
        (queryParams[paramKey] === "" || queryParams[paramKey] === null || queryParams[paramKey] === undefined) && delete queryParams[paramKey]
    }

    dispatch(FETCH_SEPARATE_PRODUCTS_START);

    try {
        const {data} = await axios.get(`${dataUrl}/my/products?${qs.stringify({ ...queryParams, sold })}`);
        dispatch({ type: FETCH_SEPARATE_PRODUCTS, payload: { data } });
    } catch (productsError) {
        dispatch({ type: FETCH_SEPARATE_PRODUCTS_FAILURE, payload: { productsError } });
    }
};

export const transferProducts = (products, placeFrom, placeTo) => async dispatch => {
    if (products.length !== 0 && placeFrom && placeTo) {
        const params = {
            product_sum_ids: products,
            place_from: placeFrom,
            place_to: placeTo
        };
        try {
            const {data} = await axios.post(`${dataUrl}/my/transfer`, params)
            if (data.transferred.length === 0) {
                dispatch(showAlert('Запись уже существует!', 'transfer'))
                return
            }
            dispatch({ type: TRANSFER_PRODUCTS, payload: { data } })
        } catch (e) {
            console.error(e)
        }
    }
};

export const sellProducts = (products = [], user_place_id) => dispatch => {
    const params = {
        product_sum_ids: products,
        user_place: user_place_id
    };
    console.log({ params })
    if (products.length !== 0 && user_place_id) {
        return axios.post(`${dataUrl}/my/sell`, params)
            .then(({data}) => {
                dispatch({ type: SELL_PRODUCTS, payload: {data} })
                return data
            })
            .catch(console.warn)
    }
};


export const clearSeparatedData = () => dispatch => dispatch(CLEAR_SEPARATED_PRODUCTS);