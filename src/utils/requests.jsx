
import axios from 'axios';

export const baseUrl = "http://localhost:8000/";

export const fetchList = async (url, setFunction) => {
    await axios.get(baseUrl + url)
    .then(response => {
    setFunction(response.data);
    })
}

export const fetchDetail = async (url, id, setFunction, setLoading=null) => {
    if (setLoading) {
        setLoading(true);
    }
    await axios.get(baseUrl + url + String(id) + "/")
    .then(response => {
        setFunction(response.data);
    })
    if (setLoading) {
        setLoading(false);
    }
}

export const postRequest = async (url, data) => {
    await axios.post(baseUrl + url, data);
}
