import axios from 'axios';

import { ADD_POST, GET_ERRORS, GET_ALL_POSTS, POST_LOADING, GET_POST, DELETE_POST, UPDATE_POST, ADD_COMMENT, DELETE_COMMENT, URL } from './type';


// post loading

export const postLoading = () => {
    return {
        type: POST_LOADING
    }
}

// add post
export const addPost = post => dispath => {
    axios
        .post(URL + '/posts/add', post)
        .then(res => {
            dispath({
                type: ADD_POST,
                payload: res.data
            })
        })
        .catch(err => {
            dispath({
                type: GET_ERRORS,
                payload: err
            })
        })
}

// get posts
export const getPosts = () => dispath => {
    dispath(postLoading())
    axios
        .get(URL + '/posts')
        .then(res => {
            dispath({
                type: GET_ALL_POSTS,
                payload: res.data
            })
        })
        .catch(err => {
            dispath({
                type: GET_ERRORS,
                payload: err
            })
        })
}

// get post
export const getPost = (id) => dispath => {
    dispath(postLoading());
    axios
        .get(`${URL}/posts/${id}`)
        .then(res => {
            dispath({
                type: GET_POST,
                payload: res.data
            })
        })
        .catch(err => {
            dispath({
                type: GET_ERRORS,
                payload: err
            })
        })
}

// delete post
export const deletePost = id => dispath => {
    axios
        .post(`${URL}/posts/delete/${id}`)
        .then(res => {
            console.log(res)
            dispath({
                type: DELETE_POST,
                payload: res.data
            })
        })
        .catch(err => {
            dispath({
                type: GET_ERRORS,
                payload: err
            })
        })
}

// update post
export const updatePost = (id, data) => dispath => {
    axios
        .post(`${URL}/posts/edit/${id}`, data)
        .then(res => {
            dispath({
                type: UPDATE_POST,
                payload: res.data
            })
        })
        .catch(err => {
            dispath({
                type: GET_ERRORS,
                payload: err
            })
        })
}

// add comment
export const addComment = (id, data) => dispath => {
    axios
        .post(`${URL}/posts/comment/${id}`, data)
        .then(res => {
            // console.log(res.data)
            dispath({
                type: ADD_COMMENT,
                payload: res.data.comment
            })
        })
        .catch(err => {
            dispath({
                type: GET_ERRORS,
                payload: err
            })
        })
}

// delete coment
export const deleteComment = (post_id, comment_id) => dispath => {
    axios
        .post(`${URL}/posts/comment/${post_id}/${comment_id}`)
        .then(res => {
            dispath({
                type: DELETE_COMMENT,
                payload: res.data.comment_id
            })
        })
        .catch(err => {
            dispath({
                type: GET_ERRORS,
                payload: err
            })
        })
}