import { combineReducers } from 'redux'

import localSettingsReducer from '../Modules/LocalSettings/localSettingsReducer'
import productsReducer from '../Modules/Products/productsReducer'

export default combineReducers({
    localSettings: localSettingsReducer,
    products: productsReducer
})