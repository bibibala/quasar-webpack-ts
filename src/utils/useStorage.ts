import { Key } from 'src/utils/useStatic';
import { LocalStorage, SessionStorage } from 'quasar';

// 设置用户token
export function setToken(data: string) {
    SessionStorage.set(Key.ACCESS_TOKEN, data);
}

export function getToken() {
    return SessionStorage.getItem(Key.ACCESS_TOKEN);
}

/**
 *
 * @returns {boolean}
 */
export function haveToken(): boolean {
    return SessionStorage.has(Key.ACCESS_TOKEN);
}

// 清除所有缓存
export function clearStorage() {
    // 重置本地存储
    LocalStorage.clear();
    SessionStorage.clear();
}
