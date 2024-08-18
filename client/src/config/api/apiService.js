import axiosConfig from "../axios/axiosConfig.js";

const apiConfig = {
    authCheck: () => axiosConfig.post("/authCheck"),
}


export default {
    apiConfig,
}