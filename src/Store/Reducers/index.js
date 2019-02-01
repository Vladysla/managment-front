import { combineReducers } from 'redux'

import localSettingsReducer from '../Modules/LocalSettings/localSettingsReducer'
import productsReducer from '../Modules/Products/productsReducer'
import productReducer from '../Modules/Product/productReducer'

export default combineReducers({
    localSettings: localSettingsReducer,
    products: productsReducer,
    product: productReducer
})