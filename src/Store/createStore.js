import {
    createStore,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './Reducers';
import {
    dispatchString,
    hideAlert
} from './Middlewares'

let enhancer = applyMiddleware(thunk, dispatchString, hideAlert);
if (process.env.NODE_ENV === 'development') {
    enhancer = composeWithDevTools(
        applyMiddleware(thunk, dispatchString, hideAlert)
    )
}

const REDUX_STORAGE_NAME = 'manage-redux-state';

const localStore = localStorage.getItem(REDUX_STORAGE_NAME);
const persistedState = localStore ? JSON.parse(localStore) : {};
const store = createStore(reducers, persistedState, enhancer);

store.subscribe(() => {
    const localSettingsState = store.getState().localSettings;

    const localSettings = {
        ...localSettingsState,
        authorizationToken: localSettingsState.authorizationToken,
        user: localSettingsState.user,
        currency: localSettingsState.currency,
        alert: {
            show: false,
            message: '',
            type: ''
        }
    };

    localStorage.setItem(REDUX_STORAGE_NAME, JSON.stringify({ localSettings }))
});

if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./Reducers', () => store.replaceReducer(reducers))
}

export default store;
