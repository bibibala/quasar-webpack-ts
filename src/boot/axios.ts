import axios from 'axios';
import { LoadingBar } from 'quasar';
import { boot } from 'quasar/wrappers';
import { Key } from 'src/utils/useStatic';
import { MessageType, useToast } from 'src/utils/useToast';

const http = axios.create({
    url: process.env.APP_URL,
    headers: {
        'System-Type': 'WEB_TOKEN',
        'Access-Control-Allow-Origin': '*'
    },
    timeout: 8000
});
let cancelTokenSource = axios.CancelToken.source();

export default boot(({/*app router*/ }) => {
    http.interceptors.request.use(
        (request) => {
            request.cancelToken = cancelTokenSource.token;
            request.headers[Key.ACCESS_TOKEN] = Key.haveToken() ? Key.getToken() : '';
            LoadingBar.start();
            return request;
        },
        (error) => {
            LoadingBar.stop();
            useToast(MessageType.ERROR, `${JSON.parse(error)}`);
            return Promise.reject(error);
        }
    );
    http.interceptors.response.use(
        (response) => {
            const { data } = response;
            if (data.code === 401) {
                cancelTokenSource.cancel(
                    '您的登录已过期'
                );
                cancelTokenSource = axios.CancelToken.source();
            }
            LoadingBar.stop();
            return data;
        },
        (error) => {
            LoadingBar.stop();
            useToast(MessageType.ERROR, `${JSON.parse(error)}`);
            return Promise.reject(error);
        }
    );
});

const xhr = {
    get(url: string, params: any) {
        return http({
            url,
            method: 'GET',
            params: params,
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        });
    },
    post(url: string, data: any) {
        return http({
            url,
            method: 'POST',
            data,
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        });
    },
    file(url: string, data: any) {
        return http({
            url,
            method: 'POST',
            data,
            headers: {
                'Content-Type': 'application/form-need'
            }
        });
    },
    uploadFile(url: string, data: any) {
        return http({
            url,
            method: 'POST',
            data,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    delete(url: string, data: any) {
        return http({
            url,
            method: 'DELETE',
            data,
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        });
    }
};
export { xhr };
