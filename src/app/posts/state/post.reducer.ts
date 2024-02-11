import { createReducer } from "@ngrx/store"
import { initialPostState } from "./post.state"

const _postReducer = createReducer(initialPostState)

export function postReducer(state: any, action: any) {
    return _postReducer(state, action)
}