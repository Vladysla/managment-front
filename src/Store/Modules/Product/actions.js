import axios, { dataUrl } from '../../../API'
import {
    FETCH_PRODUCT,
    CLEAR_PRODUCT
} from './actionTypes'

export const loadProduct = productId => dispatch => {
    return axios.get(`${dataUrl}/product/${productId}`)
        .then(response => {
            const data = response.data
            dispatch({ type: FETCH_PRODUCT, payload: data })
        })
        .catch(error => Promise.reject(error))
}

export const clearProduct = () => dispatch => {
    dispatch({ type: CLEAR_PRODUCT })
}