import axios, { dataUrl } from '../../../API'
import qs from 'query-string'

import {
    FETCH_TRANSFER_INCOME
} from './actionTypes'


export const loadTransferIncomeProducts = queryParams => async dispatch => {
    try {
        const { data } = await axios.get(`${dataUrl}/my/transfer/get?${qs.stringify(queryParams)}`);
        dispatch({ type: FETCH_TRANSFER_INCOME, payload: {data} })
    } catch (err) {
        console.log(err)
    }
}