export const createStore = (reducer) => {
    let state;
    let listeners = [];

    const getState = () => {
        return state;
    };

    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(listener => listener());
        return action;
    };

    const subscribe = (listener) => {
        listeners.push(listener);
        return () => {
            listeners = listeners.filter(l => l !== listener);
        }
    };

    state = reducer(undefined, {});

    return {
        getState,
        dispatch,
        subscribe
    }
};