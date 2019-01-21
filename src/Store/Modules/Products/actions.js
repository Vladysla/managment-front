import axios, { dataUrl } from '../../../API'

import {
    FETCH_PRODUCTS
} from './actionTypes'

export const loadProducts = () => dispatch => {
    return axios.get(`${dataUrl}products`)
            .then(response => {
                const data = response.data
                dispatch({ type: FETCH_PRODUCTS, payload: { data } })
            })
            .catch(error => Promise.reject(error))
}