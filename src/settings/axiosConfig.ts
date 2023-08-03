import axios from "axios";
import {LOCAL_STORAGE_AUTH_TOKEN_KEY} from "../constants/global";
import {store} from "../store";
import {notAuthenticated} from "../store/actions/AuthActions";

axios.defaults.baseURL = process.env.BASE_API_URL

axios.defaults.headers.common = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
};
axios.interceptors.request.use(
    (config) => {
        const auth_token = localStorage.getItem(
            LOCAL_STORAGE_AUTH_TOKEN_KEY
        );
        if (auth_token) {
            config.headers['Authorization'] = auth_token;
        } else {
            store.dispatch(notAuthenticated());
        }
        // store.dispatch(requestStart(config.url));
        return config;
    },
    (error) => {
        // store.dispatch(requestClean());
        return Promise.reject(error);
    }
);