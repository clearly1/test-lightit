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


export const getProducts = async (url) => getQuery(url);