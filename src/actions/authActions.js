import { GET_ERRORS, SET_CURRENT_USER, URL } from "./type";
import axios from "axios";

import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";
import qs from "qs";

export const registerUser = (userData, history) => dispatch => {
    axios
        .post(URL + "/users/register", qs.stringify(userData), {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
            }
        })
        .then(res => {
            console.log(res.data);
            history.push("/login");
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

// login
export const loginUser = userDate => dispatch => {
    axios.post(URL + '/users/login', qs.stringify(userDate))
        .then(res => {
            const { token } = res.data;
            localStorage.setItem('jwtToken', token);
            setAuthToken(token);
            const decoded = jwt_decode(token);
            dispatch(setCuttentUser(decoded, token));
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        })
}

export const setCuttentUser = (decoded, token) => {
    return {
        type: SET_CURRENT_USER,
        payload: { user: decoded, token: token }
    }
}

export const logoutUser = () => dispatch => {
    // remove token from localstorage
    localStorage.removeItem('jwtToken');
    // remove header axios
    setAuthToken(false);
    // set curretn user to {}
    dispatch(setCuttentUser({}))
}