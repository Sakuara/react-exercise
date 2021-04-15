import Axios from 'axios';

const http =Axios.create({
    baseURL: 'https://cnodejs.org/api/v1'
});

export default http;