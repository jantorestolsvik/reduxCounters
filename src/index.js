import React from 'react'
import {render} from 'react-dom'
import {App} from './components/App';
import {counters} from './reducers/counter';
import {hideFilter} from './reducers/hideFilter';
import {createStore}  from 'redux';
import {Provider} from 'react-redux';

let combineReducers = (reducers) => (state = {}, action) => {
    return Object.keys(reducers).reduce((newState, key) => {
            newState[key] = reducers[key](state[key], action);
            return newState;
        }
        , {})
};

let store = createStore(combineReducers({
    counters,
    hideFilter
}));


render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
