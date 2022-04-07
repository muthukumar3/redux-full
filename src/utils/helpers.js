import axios from "axios";

export const Axios = axios.create({
    baseURL:  '',
    headers: {'Accept':'application/json'}
});

export const axiosReqResLoader = () => {
    Axios.interceptors.request.use((config) => {
        document.getElementById('loader').classList.add('loader');
        return config;

    }, (error) => {

        console.log(error);
        return Promise.reject(error);
    });
    
    Axios.interceptors.response.use((response) => {
        document.getElementById('loader').classList.remove('loader');
        return response;
    }, (error) => {
        return Promise.reject(error);
    });
}