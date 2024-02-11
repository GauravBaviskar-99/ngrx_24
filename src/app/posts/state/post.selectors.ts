import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostState } from "./post.state";
import { AppState } from "src/app/appState/appState";

const Posts = createFeatureSelector<PostState>('post')

export const getPosts = createSelector(Posts, state => {
    return state.posts
})