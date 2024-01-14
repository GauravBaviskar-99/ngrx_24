import { createReducer, on } from "@ngrx/store"
import { Decrement, Increment, Reset } from "./counter.actions"
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
    })
);




export function counterReducer(state: any, action: any) {

    return _counterReducer(state, action)
}