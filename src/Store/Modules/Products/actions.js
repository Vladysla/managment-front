import axios, { dataUrl } from '../../../API'
import qs from 'query-string'

import {
    FETCH_PRODUCTS
} from './actionTypes'

export const loadProducts = (queryParams) => dispatch => {
    return axios.get(`${dataUrl}/products?${qs.stringify(queryParams)}`)
            .then(response => {
                const data = response.data
                dispatch({ type: FETCH_PRODUCTS, payload: { data } })
            })
            .catch(error => Promise.reject(error))
}