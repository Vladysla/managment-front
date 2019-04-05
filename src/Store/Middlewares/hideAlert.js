import {
    SHOW_ALERT,
    CLOSE_ALERT
} from '../Modules/LocalSettings/actionTypes'

export default store => next => action => {
    if (action.type === SHOW_ALERT) {
        setTimeout(() => store.dispatch({ type: CLOSE_ALERT }), 5000)
    }

    return next(action)
}