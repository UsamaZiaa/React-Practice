import { createStore } from "redux";

function counterReducer(state = { count: 100, user: {} }, action) {
    const newState = { ...state };

    if (action.type === "increment") {
        newState.count += action.count
        return newState
    } else if (action.type === "decrement") {
        newState.count -= action.count
        return newState
    }
    return state;
}

export const store = createStore(counterReducer)