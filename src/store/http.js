import Axios from 'axios';

const http =Axios.create({
    baseURL: 'https://cnodejs.org/api/v1'
});

const httpPre = Axios.create({
    baseURL: 'https://cnodejs.org',
    withCredentials: true
})

export default http;
export {httpPre};