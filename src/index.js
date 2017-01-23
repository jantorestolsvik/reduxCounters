import React from 'react'
import {render} from 'react-dom'
import {App} from './components/App';
import {counters} from './reducers/counter';
import {hideFilter} from './reducers/hideFilter';
import {createStore, combineReducers}  from 'redux';
import {Provider} from 'react-redux';

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
