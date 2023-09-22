import axios from 'axios';
import { setupInterceptorsTo } from './requests';

const api = setupInterceptorsTo(
    axios.create({
        baseURL: process.env.NEXT_PUBLIC_ENDPOINT_AUTH,
        headers: {
            "Content-Type": "application/json",
        },
    })
);

export default api;
