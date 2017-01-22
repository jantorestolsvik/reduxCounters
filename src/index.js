import React from 'react'
import {render} from 'react-dom'
import {App} from './components/App';
import {counter} from './reducers/counter';
import {createStore}  from 'redux';
import {Provider} from 'react-redux';

let store = createStore(counter);

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
