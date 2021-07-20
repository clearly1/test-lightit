import axios from 'axios'
import {setUsername} from "../features/auth/authSlice";


const config = {
    baseURL: "http://smktesting.herokuapp.com/",
    headers: {
        'Content-type': 'application/json',
    }
};

export const axiosInstance = axios.create(config);

if (document.cookie.match('(^|;) ?token=([^;]*)(;|$)')) {
    axiosInstance.defaults.headers.common['Authorization'] = 'Token ' + document.cookie.match('(^|;) ?token=([^;]*)(;|$)')[2];
}

axiosInstance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if(error.response.status === 401){
        document.cookie = 'username=; expires=' + new Date().toUTCString();
        document.cookie = 'token=; expires=' + new Date().toUTCString();
        window.location.href = "/"
    }
    return Promise.reject(error);
});

const getQuery = async (url) => {
    return await axiosInstance.get(url);
};

const postQuery = async (url, data) => {
    return await axiosInstance.post(url, data);
};

export const getProducts = async (url) => getQuery(url);
export const getReviewsByProductId = async (url) => getQuery(url);
export const authentication = async (url, data) => postQuery(url, data);
export const createReview = async (url, data) => postQuery(url, data);
