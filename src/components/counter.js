import React from 'react'


export const Counter = ({counter, increment, decrement}) => {
    return (
        <div>
            <span>{counter.value}</span>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
};

export default Counter;