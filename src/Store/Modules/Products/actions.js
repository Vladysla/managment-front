import axios, { dataUrl } from '../../../API'
import qs from 'query-string'

import {
    FETCH_PRODUCTS_SUM,
    FETCH_PRODUCTS_SUM_START,
    FETCH_PRODUCTS_SUM_FAILURE,
    FETCH_PLACES,
    FETCH_SIZES,
    FETCH_COLORS,
    FETCH_TYPES,
    CLEAR_PRODUCTS, FETCH_MODELS,
    FETCH_TYPES_START,
    FETCH_PLACES_START,
} from './actionTypes'

export const loadProducts = (queryParams) => async dispatch => {
    for (let paramKey in queryParams) {
        (queryParams[paramKey] === "" || queryParams[paramKey] === null || queryParams[paramKey] === undefined) && delete queryParams[paramKey]
    }

    dispatch(FETCH_PRODUCTS_SUM_START);

    try {
        const {data} = await axios.get(`${dataUrl}/products?${qs.stringify(queryParams)}`);
        dispatch({ type: FETCH_PRODUCTS_SUM, payload: { data } })
    } catch (productsError) {
        dispatch({ type: FETCH_PRODUCTS_SUM_FAILURE, payload: { productsError } })
    }
};

export const loadPlaces = () => dispatch => {
    dispatch(FETCH_PLACES_START);
    return axios.get(`${dataUrl}/places`)
        .then(response => {
            const data = response.data;
            dispatch({ type: FETCH_PLACES, payload: data })
            return data;
        })
        .catch(error => Promise.reject(error))
};

export const loadSizes = () => dispatch => {
    return axios.get(`${dataUrl}/sizes`)
        .then(response => {
            const data = response.data;
            dispatch({ type: FETCH_SIZES, payload: data })
        })
        .catch(error => Promise.reject(error))
};

export const loadColors = () => dispatch => {
    return axios.get(`${dataUrl}/colors`)
        .then(response => {
            const data = response.data;
            dispatch({ type: FETCH_COLORS, payload: data })
        })
        .catch(error => Promise.reject(error))
};

export const loadTypes = () => dispatch => {
    dispatch(FETCH_TYPES_START);
    return axios.get(`${dataUrl}/types`)
        .then(response => {
            const data = response.data;
            dispatch({ type: FETCH_TYPES, payload: data })
        })
        .catch(error => Promise.reject(error))
};

export const loadModels = () => dispatch => {
    return axios.get(`${dataUrl}/models`)
        .then(response => {
            const data = response.data
            dispatch({ type: FETCH_MODELS, payload: data })
        })
        .catch(console.warn)
}

export const clearData = () => dispatch => dispatch(CLEAR_PRODUCTS);