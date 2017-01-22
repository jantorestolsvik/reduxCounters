import {INCREMENT, DECREMENT, ADD_COUNTER} from '../actions/counter'

export const counter = (state, action) => {
    if (action.type === INCREMENT) {
        if (state.id === action.id) {
            return {
                ...state,
                value: state.value + 1
            }
        }
    }
    if (action.type === DECREMENT) {
        if (state.id === action.id) {
            return {
                ...state,
                value: state.value -1
            }
        }
    }
    if (action.type === ADD_COUNTER) {
        return {
            id: action.id,
            value: 0
        }
    }
    return state;
};

export const counters = (state = [], action) => {
    switch (action.type) {
        case INCREMENT:
        case DECREMENT:
            return state.map(c => counter(c, action));
        case ADD_COUNTER:
            return [
                ...state,
                counter(undefined, action)
            ];
        default:
            return state;
    }
};

export default counter;