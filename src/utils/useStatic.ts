import { LocalStorage, SessionStorage } from 'quasar';

export class Key {
    static readonly ROUTER_NAME = 'Login';
    static readonly ROUTER_DASHBOARD = 'Dashboard';
    static readonly ACCESS_TOKEN = 'Access-Token';

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
