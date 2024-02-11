import { Post } from "../model/post.model"

export interface PostState {
    posts: Post[]
}

export const initialPostState: PostState = {
    posts: [
        { id: '1', title: 'sample_title_1', description: 'sampleDiscription_1' },
        { id: '2', title: 'sample_title_2', description: 'sampleDiscription_2' },

    ]
}