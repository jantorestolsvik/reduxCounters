import React from 'react'
import {INCREMENT, DECREMENT} from '../reducers/counter'

export const Counter = ({store}) => {
    return (
        <div>
            <span>{store.getState()}</span>
            <button onClick={() => {
                store.dispatch({
                    type: INCREMENT
                })
            }}>+</button>
            <button onClick={() => {
                store.dispatch({
                    type: DECREMENT
                })
            }}>-</button>
        </div>
    )
};

export default Counter;