import React from 'react'
import {render} from 'react-dom'
import {App} from './components/App';
import {counter} from './reducers/counter';
import {createStore}  from './createStore';

let store = createStore(counter);

let renderApp = () => {
    render(
        <div>
            <App store={store} />
        </div>,
        document.getElementById('root')
    );
};

renderApp();

store.subscribe(() => {
    renderApp();
});
