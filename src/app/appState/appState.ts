import { postReducer } from "../posts/state/post.reducer";
import { PostState } from "../posts/state/post.state";
import { counterReducer } from "../CounterModule/state/counter.reducer";
import { counterState } from "../CounterModule/state/counter.state";

export interface AppState {
    counter: counterState;
    post: PostState
}

export const AppReducer = {
    counter: counterReducer,
    post: postReducer
}