import React from 'react'
import {INCREMENT, DECREMENT} from '../reducers/counter'

export const Counter = ({state, dispatch}) => {
    return (
        <div>
            <span>{state}</span>
            <button onClick={() => {
                dispatch({
                    type: INCREMENT
                })
            }}>+</button>
            <button onClick={() => {
                dispatch({
                    type: DECREMENT
                })
            }}>-</button>
        </div>
    )
};

export default Counter;