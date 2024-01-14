import { createReducer, on } from "@ngrx/store"
import { CustomIncrement, Decrement, Increment, Reset } from "./counter.actions"
import { initialState } from "./counter.state";

const _counterReducer = createReducer(initialState, on(Increment, (state) => {
    return {
        ...state,
        counter: state.counter + 1
    }
}),
    on(Decrement, (state) => {
        return {
            ...state,
            counter: state.counter - 1
        }
    }),
    on(Reset, (state) => {
        return {
            ...state,
            counter: 0
        }
    }),
    on(CustomIncrement, (state, action) => {
        return {
            ...state,
            counter: state.counter + action.value
        }
    })
);




export function counterReducer(state: any, action: any) {

    return _counterReducer(state, action)
}