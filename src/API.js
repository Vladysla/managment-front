import store from './Store/createStore'
import {
    logout
} from './Store/Modules/LocalSettings/actions'
import axios from 'axios'

export const loginUrl = 'api/auth/login'
export const dataUrl = 'api'

const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer'
}

const API = axios.create({
    baseURL: 'http://laravel.home/',
    headers
})

API.interceptors.request.use(
    config => {
        config.headers['Authorization'] = `Bearer ${store.getState().localSettings.authorizationToken}`
        return config
    },
    error => Promise.reject(error)
)

API.interceptors.response.use(
    response => response,
    error => {

        if(error.response && error.response.status === 401) {
            store.dispatch(logout())
        }

        return Promise.reject(error)
    }
)

export default API