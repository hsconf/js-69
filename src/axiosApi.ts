import axios from "axios";

const axiosApi = axios.create({
    baseURL: 'http://api.tvmaze.com/search/shows?q=csi/',
});

export default axiosApi;