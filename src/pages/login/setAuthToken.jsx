import axios from 'axios';
 
export const setAuthToken = token => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}