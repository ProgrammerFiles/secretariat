import { axios } from "../../utils/libs.js";

const axiosConfig = axios.create({
    header: {
        'Content-Type': 'application/json'
    }
});

export default axiosConfig;