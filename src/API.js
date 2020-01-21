import store from './Store/createStore'
import {
    logout
} from './Store/Modules/LocalSettings/actions'
import axios from 'axios'
export const baseURL = 'http://laravel.home/';
export const loginUrl = 'api/auth/login';
export const dataUrl = 'api';
export const imgPath = `${baseURL}uploads/images`;
export const getImage = (imgName) => {
    if (imgName === '' || !imgName) {
        return `${imgPath}/no-photo.jpg`;
    }
    return `${imgPath}/${imgName}`;
};

const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer'
};

const API = axios.create({
    baseURL,
    headers
});

API.interceptors.request.use(
    config => {
        config.headers['Authorization'] = `Bearer ${store.getState().localSettings.authorizationToken}`
        return config
    },
    error => Promise.reject(error)
);

API.interceptors.response.use(
    response => response,
    error => {

        if(error.response && error.response.status === 401) {
            store.dispatch(logout())
        }

        return Promise.reject(error)
    }
);

export default API