import { xhr } from 'boot/axios';


const api = {
    login(data: any) {
        return xhr.post('', data);
    }
};
export default api;
