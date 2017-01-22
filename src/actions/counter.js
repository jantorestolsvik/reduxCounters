export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD_COUNTER = "ADD_COUNTER";

export const increment = (id) => {
    return {
        type: INCREMENT,
        id
    }
};

export const decrement = (id) => {
    return {
        type: DECREMENT,
        id
    }
};

let counterId = 0;
export const addCounter = () => {
    return {
        type: ADD_COUNTER,
        id: counterId++
    }
};