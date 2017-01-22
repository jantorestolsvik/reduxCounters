import React from 'react';
import Counter from './counter';

export const App = ({store}) => {
    return (
        <div>
            <Counter store={store} />
        </div>
    )
};

export default App;