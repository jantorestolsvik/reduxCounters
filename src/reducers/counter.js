import {DECREMENT, INCREMENT} from '../actions/counter';

export const counter = (state = 0, action) => {
    if (action.type === INCREMENT) {
        return state + 1;
    }
    if (action.type === DECREMENT) {
        return state - 1;
    }
    return state;
};

export default counter;