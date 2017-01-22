import {HIDE_LESS_THAN} from '../actions/hideFilter'

export const hideFilter = (state = -1, action) => {
    if (action.type === HIDE_LESS_THAN) {
        return action.value
    }
    return state;
};