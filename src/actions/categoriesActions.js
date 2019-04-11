import {
    GET_ERRORS,
    GET_CATEGORIES,
    DELETE_CATEGORY,
    ADD_CATEGORY,
    UPDATE_CATEGORY,
    CATEGORIES_LOADING,
    URL
} from "./type";
import axios from "axios";

// categories loading
export const categoriesLoading = () => {
    return {
        type: CATEGORIES_LOADING
    }
}

// get all categories
export const getCategories = categories => dispatch => {
    dispatch(categoriesLoading())
    axios
        .get(URL + "/categories")
        .then(res => {
            dispatch({
                type: GET_CATEGORIES,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch({
                type: GET_CATEGORIES,
                payload: null
            });
        });
};

// deletecategory
export const deleteCategory = id => dispatch => {
    axios
        .post(`${URL}/categories/delete/${id}`)
        .then(res => {
            dispatch({
                type: DELETE_CATEGORY,
                payload: res.data.id
            });
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: null
            });
        });
};

// add category
export const addCategory = category => dispatch => {
    axios
        .post(URL + "/categories/add", category)
        .then(res => {
            dispatch({
                type: ADD_CATEGORY,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err
            });
        });
};

// edit category
export const updateCategory = (id, data) => dispatch => {
    axios
        .post(`${URL}/categories/edit/${id}`, data)
        .then(res => {
            // console.log(res.data);
            dispatch({
                type: UPDATE_CATEGORY,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err
            });
        });
};