import React from 'react'
import {render} from 'react-dom'
import {App} from './components/App';
import {counters} from './reducers/counter';
import {hideFilter} from './reducers/hideFilter';
import {createStore}  from 'redux';
import {Provider} from 'react-redux';

let store = createStore((state = {}, action) => {
    return {
        counters: counters(state.counters, action),
        hideFilter: hideFilter(state.hideFilter, action)
    }
});

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
