import store from './Store/createStore'
import {
    logout
} from './Store/Modules/LocalSettings/actions'
import axios from 'axios'

export const loginUrl = 'login/signin'
export const dataUrl = 'http://localhost:3000/'

const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer'
}

const API = axios.create({
    baseURL: 'http://localhost/',
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