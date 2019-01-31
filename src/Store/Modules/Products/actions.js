import axios, { dataUrl } from '../../../API'
import qs from 'query-string'

import {
    FETCH_PRODUCTS_SUM,
    FETCH_PRODUCTS,
    FETCH_PLACES,
    FETCH_SIZES,
    FETCH_COLORS
} from './actionTypes'

export const loadProducts = (queryParams) => dispatch => {
    return axios.get(`${dataUrl}/products?${qs.stringify(queryParams)}`)
            .then(response => {
                const data = response.data
                dispatch({ type: FETCH_PRODUCTS_SUM, payload: { data } })
            })
            .catch(error => Promise.reject(error))
}

export const loadPlaces = () => dispatch => {
    return axios.get(`${dataUrl}/places`)
        .then(response => {
            const data = response.data
            dispatch({ type: FETCH_PLACES, payload: data })
        })
        .catch(error => Promise.reject(error))
}

export const loadSizes = () => dispatch => {
    return axios.get(`${dataUrl}/sizes`)
        .then(response => {
            const data = response.data
            dispatch({ type: FETCH_SIZES, payload: data })
        })
        .catch(error => Promise.reject(error))
}

export const loadColors = () => dispatch => {
    return axios.get(`${dataUrl}/colors`)
        .then(response => {
            const data = response.data
            dispatch({ type: FETCH_COLORS, payload: data })
        })
        .catch(error => Promise.reject(error))
}

export const loadTypes = () => dispatch => {
    return axios.get(`${dataUrl}/types`)
        .then(response => {
            const data = response.data
            dispatch({ type: FETCH_COLORS, payload: data })
        })
        .catch(error => Promise.reject(error))
}