import axios from 'axios'

const config = {
    baseURL: "http://smktesting.herokuapp.com/",
    headers: {
        'Content-type': 'application/json',
    }
};

const axiosInstance = axios.create(config);

const getQuery = async (url) => {
    return await axiosInstance.get(url);
};

const postQuery = async (url, data) => {
  return await axiosInstance.post(url,data);
};


export const getProducts = async (url) => getQuery(url);
export const getReviewsByProductId = async (url) => getQuery(url);
export const authentication = async (url, data) => postQuery(url, data);
