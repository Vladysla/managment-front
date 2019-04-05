import { combineReducers } from 'redux'

import localSettingsReducer from '../Modules/LocalSettings/localSettingsReducer'
import productsReducer from '../Modules/Products/productsReducer'
import productReducer from '../Modules/Product/productReducer'
import separatedProductReducer from '../Modules/SeparatedProducts/separatedProductsReducer'
import separatedProductStorageReducer from '../Modules/SeparatedProductsStorage/separatedProductsStorageReducer'

export default combineReducers({
    localSettings: localSettingsReducer,
    products: productsReducer,
    product: productReducer,
    separatedProducts: separatedProductReducer,
    productsStorage: separatedProductStorageReducer
})