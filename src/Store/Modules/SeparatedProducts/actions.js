import axios, { dataUrl } from '../../../API'
import qs from 'query-string'

import {
    FETCH_SEPARATE_PRODUCTS,
    FETCH_SEPARATE_PRODUCTS_START,
    FETCH_SEPARATE_PRODUCTS_FAILURE,
    CLEAR_SEPARATED_PRODUCTS,
    TRANSFER_PRODUCTS
} from './actionTypes'

export const loadSeparateProducts = (queryParams) => async dispatch => {
    for (let paramKey in queryParams) {
        (queryParams[paramKey] === "" || queryParams[paramKey] === null || queryParams[paramKey] === undefined) && delete queryParams[paramKey]
    }

    dispatch(FETCH_SEPARATE_PRODUCTS_START);

    try {
        const {data} = await axios.get(`${dataUrl}/my/products?${qs.stringify(queryParams)}`);
        dispatch({ type: FETCH_SEPARATE_PRODUCTS, payload: { data } });
    } catch (productsError) {
        dispatch({ type: FETCH_SEPARATE_PRODUCTS_FAILURE, payload: { productsError } });
    }
}

export const transferProducts = (products, placeFrom, placeTo) => async dispatch => {
    if (products.length !== 0 && placeFrom && placeTo) {
        console.log(products, placeFrom, placeTo)
        const params = {
            product_sum_ids: products,
            place_from: placeFrom,
            place_to: placeTo
        };
        try {
            const {data} = await axios.post(`${dataUrl}/my/transfer`, params)
        } catch (e) {

        }
    }
}


export const clearSeparatedData = () => dispatch => dispatch(CLEAR_SEPARATED_PRODUCTS);