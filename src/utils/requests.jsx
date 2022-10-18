
import axios from 'axios';

const baseUrl = "http://localhost:8000/";

export const getRequest = async (url, setFunction) => {
    await axios.get(baseUrl + url)
    .then(response => {
    setFunction(response.data);
    })
}

export const postRequest = async (url, data) => {
    await axios.post(baseUrl + url, data);
}
