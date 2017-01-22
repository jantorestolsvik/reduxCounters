import React from 'react';
import Counters from '../containers/counters';
import HideFilter from '../containers/HideFilter';

export const App = () => {
    return (
        <div>
            <Counters />
            <HideFilter/>
        </div>
    )
};

export default App;