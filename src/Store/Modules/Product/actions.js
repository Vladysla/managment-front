import axios, { dataUrl } from '../../../API'
import {
    FETCH_PRODUCT,
    CLEAR_PRODUCT,
    ADD_PRODUCT
} from './actionTypes'

export const loadProduct = productId => dispatch => {
    return axios.get(`${dataUrl}/product/${productId}`)
        .then(response => {
            const data = response.data;
            dispatch({ type: FETCH_PRODUCT, payload: data })
        })
        .catch(error => Promise.reject(error))
};

export const clearProduct = () => dispatch => {
    dispatch({ type: CLEAR_PRODUCT })
};

export const addProduct = (productData) => dispatch => {
    let settings = { headers: { 'Content-Type': 'multipart/form-data' } }
    let formData = new FormData();
    formData.append('brand', productData.brand);
    formData.append('model', productData.model);
    formData.append('price_arrival', productData.price_arrival);
    formData.append('price_sell', productData.price_sell);
    formData.append('type_id', productData.type_id);
    formData.append('product_photo', productData.photo);
    formData.append('product_exist', productData.product_exist);
    formData.append('productSelected', JSON.stringify(productData.productSelected));
    formData.append('product_color_size', JSON.stringify(productData.product_color_size));
    formData.append('place_id', productData.product_place);
    return axios.post(`${dataUrl}/products`, formData, settings)
        .then(response => {
            const data = response.data;
            dispatch({ type: ADD_PRODUCT, payload: data })
        })
        .catch(error => Promise.reject(error))
};
