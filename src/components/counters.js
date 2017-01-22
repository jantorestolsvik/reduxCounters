import React from 'react';
import Counter from '../containers/counter';

export const Counters = ({counters, addCounter, hideNumber}) => {
    return (
        <div>
            {counters
                .filter(counter => counter.value > hideNumber || 0)
                .map(counter => <Counter counter={counter}/>)}
            <button onClick={addCounter}>Add counter</button>
        </div>
    )
};