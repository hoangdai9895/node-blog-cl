import axios from 'axios';

const setAuthToken = token => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        delete axios.defaults.headers.common['Authorizaton'];
    }
}

export default setAuthToken;