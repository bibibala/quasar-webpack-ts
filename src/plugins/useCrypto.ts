import CryptoJS from 'crypto-js';

const key = CryptoJS.enc.Utf8.parse('yISzM8Q3psd0z0I1');

type CryptoJSConfig = {
    // 获取他的类型
    mode: typeof CryptoJS.mode.ECB;
    padding: typeof CryptoJS.pad.Pkcs7;
};

// 添加类型
const config: CryptoJSConfig = {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
};

export function encrypt(value: string): string {
    return CryptoJS.AES.encrypt(value, key, config).toString();
}
