import { combineReducers } from "redux";
import authReducer from "./authReducer";
import categoiesReducer from './categories';
import postsReducer from './postsReducer';

export default combineReducers({
    auth: authReducer,
    categories: categoiesReducer,
    posts: postsReducer
});