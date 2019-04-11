import { SET_CURRENT_USER } from "../actions/type";
import isEmpty from "../validation/is-empty";

const initialState = {
    isAuthenticated: false,
    user: {},
    token: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload.user),
                user: action.payload.user,
                token: action.payload.token
            };
        default:
            return state;
    }
};