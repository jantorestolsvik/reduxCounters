import React from 'react';
import Counter from '../containers/counter';

export const Counters = ({counters, addCounter}) => {
    return (
        <div>
            {counters.map(counter => <Counter counter={counter}/>)}
            <button onClick={addCounter}>Add counter</button>
        </div>
    )
};