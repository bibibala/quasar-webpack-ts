import { LocalStorage, SessionStorage } from 'quasar';

export class Key {
    static readonly TIMEOUT = 8000;
    static readonly STATUS_CODE = 401;
    static readonly SYS_NAME = '我的系统';
    static readonly ENTRY_NAME = 'Login';
    static readonly PAGE_DASHBOARD_INDEX = 6;
    static readonly PAGE_DASHBOARD = 'ProjectInfo';
    static readonly ACCESS_TOKEN = 'Access-Token';

    static setToken(data: string) {
        sessionStorage.setItem(Key.ACCESS_TOKEN, data);
    }

    static getToken() {
        return SessionStorage.getItem(Key.ACCESS_TOKEN);
    }

    static haveToken(): boolean {
        return SessionStorage.has(Key.ACCESS_TOKEN);
    }

    static clearStorage() {
        LocalStorage.clear();
        SessionStorage.clear();
    }
}
