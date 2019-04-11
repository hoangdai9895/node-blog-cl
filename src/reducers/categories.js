import {
    GET_CATEGORIES,
    DELETE_CATEGORY,
    ADD_CATEGORY,
    UPDATE_CATEGORY,
    CATEGORIES_LOADING
} from "../actions/type";

const innitialState = {
    categories: [],
    category: {},
    loading: false
};

export default (state = innitialState, action) => {
    switch (action.type) {
        case CATEGORIES_LOADING:
            return {
                ...state,
                loading: true
            }
        case GET_CATEGORIES:
            return {...state, categories: action.payload, loading: false };
        case DELETE_CATEGORY:
            return {
                ...state,
                categories: state.categories.filter(e => e._id !== action.payload)
            };
        case ADD_CATEGORY:
            return {
                ...state,
                categories: [action.payload, ...state.categories]
            };
        case UPDATE_CATEGORY:
            const newCategories = state.categories;
            for (var i in newCategories) {
                if (newCategories[i]._id === action.payload.id) {
                    newCategories[i].title = action.payload.title;
                    break;
                }
            }
            return {
                ...state,
                categories: newCategories
            };
        default:
            return state;
    }
};