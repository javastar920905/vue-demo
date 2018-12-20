import axios from 'axios'

// 超时设置
const http = axios.create({
    timeout: 5000,
    baseURL: process.env.API_URL
})
//或 axios.defaults.baseURL = 'https://api.github.com';

// http request 拦截器
// 每次请求都为http头增加Authorization字段，其内容为token
http.interceptors.request.use(
    config => {
        // if (store.state.user.token) {
        //     config.headers.Authorization = `token ${store.state.user.token}`;
        // }
        return config
    },
    err => {
        return Promise.reject(err)
    }
);
export default http