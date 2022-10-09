import router from "@/router";

const BASE_URL = "http://vmedu255.mtacloud.co.il:5001/api/";

import Axios from "axios";
var axios = Axios.create({
    withCredentials: false,
});
var axiosNoCredentials = Axios.create({
    withCredentials: false,
});

export default {
    axiosNoCredentials: axiosNoCredentials,
    get(endpoint, data) {
        return ajax(endpoint, "GET", data);
    },
    post(endpoint, data) {
        return ajax(endpoint, "POST", data);
    },
    put(endpoint, data) {
        return ajax(endpoint, "PUT", data);
    },
    delete(endpoint, data) {
        return ajax(endpoint, "DELETE", data);
    },
};

async function ajax(
    endpoint,
    method = "get",
    data = null,
    withCredentials = "false"
) {
    try {
        const res = await axios({
            url: `${BASE_URL}${endpoint}`,
            method,
            data,
        });
        return res.data;
    } catch (err) {
        if (err.response.status === 401) {
            router.push("/");
        }
    }
}