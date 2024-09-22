import { LoadingBar } from 'quasar';
import { boot } from 'quasar/wrappers';
import { Key } from 'src/utils/useStatic';
import { MessageType, useToast } from 'src/utils/useToast';
import axios, {
    AxiosInstance,
    AxiosHeaderValue,
    AxiosResponse,
    InternalAxiosRequestConfig,
} from 'axios';

const http: AxiosInstance = axios.create({
    timeout: Key.TIMEOUT,
    baseURL: process.env.WEB_APP_URL,
    headers: {
        'System-Type': 'WEB_TOKEN',
        'Access-Control-Allow-Origin': '*',
    } as Record<string, AxiosHeaderValue>,
});

let cancelTokenSource = axios.CancelToken.source();

export default boot(({ /*app*/ router }) => {
    http.interceptors.request.use(
        (request: InternalAxiosRequestConfig) => {
            request.cancelToken = cancelTokenSource.token;
            request.headers[Key.ACCESS_TOKEN] = Key.haveToken()
                ? Key.getToken()
                : '';
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
        (response: AxiosResponse) => {
            const { data } = response;
            if (data.code === Key.STATUS_CODE) {
                Key.clearStorage();
                router.push({ name: Key.ENTRY_NAME });
                cancelTokenSource.cancel('您的登录已过期');
                cancelTokenSource = axios.CancelToken.source();
            }
            LoadingBar.stop();
            return data;
        },
        (error) => {
            LoadingBar.stop();
            useToast(MessageType.ERROR, `${JSON.stringify(error)}`);
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
                'Content-Type': 'application/json;charset=utf-8',
            },
        });
    },
    post(url: string, data: any) {
        return http({
            url,
            method: 'POST',
            data,
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
        });
    },
    file(url: string, data: any) {
        return http({
            url,
            method: 'POST',
            data,
            headers: {
                'Content-Type': 'application/form-need',
            },
        });
    },
    delete(url: string, data: any) {
        return http({
            url,
            method: 'DELETE',
            data,
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
        });
    },
};
export { xhr };
