import React from 'react'

export const Counter = ({state, increment, decrement}) => {
    return (
        <div>
            <span>{state}</span>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
};

export default Counter;