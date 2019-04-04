import {
    applyMiddleware,
    compose,
    createStore,
} from 'redux';

import ReduxThunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';

import rootReducer from '../ducks/root';

export default function configureStore() {
    const store = createStore(
        rootReducer,
        compose(applyMiddleware(ReduxThunk, promiseMiddleware))
    );
    
    window.store = store;

    return store;
};