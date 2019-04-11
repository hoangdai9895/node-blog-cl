import { ADD_POST, GET_ALL_POSTS, POST_LOADING, GET_POST, DELETE_POST, UPDATE_POST, ADD_COMMENT, DELETE_COMMENT } from '../actions/type'

const initialState = {
    posts: [],
    post: {},
    loading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case POST_LOADING:
            return {
                ...state,
                loading: true
            }
        case ADD_POST:
            return {
                ...state,
                posts: [action.payload, ...state.posts]
            }
        case GET_ALL_POSTS:
            return {
                ...state,
                posts: action.payload,
                loading: false
            }
        case GET_POST:
            return {
                ...state,
                post: action.payload,
                loading: false
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(e => e._id !== action.payload.id)
            }
        case UPDATE_POST:
            let newPost = state.posts;
            for (var i in newPost) {
                if (newPost[i]._id === action.payload.id) {
                    newPost[i].author = action.payload.editData.author;
                    newPost[i].body = action.payload.editData.body;
                    newPost[i].category = action.payload.editData.category;
                    newPost[i].title = action.payload.editData.title;
                    newPost[i].date = action.payload.editData.date;
                    break;
                }
            }
            return {
                ...state,
                posts: newPost
            }
        case ADD_COMMENT:
            let newPostComments = state.post;
            newPostComments.comments.push(action.payload)
            return {
                ...state,
                post: newPostComments
            }
        case DELETE_COMMENT:
            let removeIndex = state.post.comments.map(item => item._id.toString()).indexOf(action.payload);
            let newPostDeleteComment = state.post;
            newPostDeleteComment.comments.splice(removeIndex, 1);
            return {
                ...state,
                post: newPostDeleteComment
            }
        default:
            return state
    }
}