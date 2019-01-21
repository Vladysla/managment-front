import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import thunk from 'redux-thunk';
import reducers from './Reducers';

let enhancer = applyMiddleware(thunk);
if (process.env.NODE_ENV === 'development') {
    enhancer = compose(
        applyMiddleware(thunk),
        window.devToolsExtension
            ? window.devToolsExtension()
            : noop => noop
    )
}

const REDUX_STORAGE_NAME = 'manage-redux-state';

const localStore = localStorage.getItem(REDUX_STORAGE_NAME);
const persistedState = localStore ? JSON.parse(localStore) : {};

const store = createStore(reducers, persistedState, enhancer);

store.subscribe(() => {
    const localSettingsState = store.getState().localSettings;

    const localSettings = {
        authorizationToken: localSettingsState.authorizationToken,
        user: localSettingsState.user
    };

    localStorage.setItem(REDUX_STORAGE_NAME, JSON.stringify({ localSettings }))
});

export default store;
