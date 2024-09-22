import Websocket from 'websocket-heartbeat-js';
import { MessageType, useToast } from 'src/utils/useToast';

interface Params {
    pingMsg?: string;
    pingTimeout?: number;
    pongTimeout?: number;
    reconnectTimeout?: number;
}

export function useSocket(msg?: string, params: Params = {}) {
    const { pingMsg, pingTimeout, pongTimeout, reconnectTimeout } = params;
    const ws = new Websocket({
        url: process.env.WS_URL,
        pingMsg: pingMsg || '',
        pingTimeout: pingTimeout || 15000,
        pongTimeout: pongTimeout || 10000,
        reconnectTimeout: reconnectTimeout || 2000,
    });
    ws.onopen = () => {
        ws.send(`${msg}`);
    };
    ws.onmessage = (e) => {
        const { code, data, msg } = JSON.parse(e.data);
        if (code === 0) {
            console.info('success');
            return data;
        } else {
            useToast(MessageType.ERROR, `ws信息接收失败,${msg}`);
        }
    };
    ws.onerror = () => {
        useToast(MessageType.ERROR, 'ws发起失败');
    };
    ws.onreconnect = () => {
        console.warn('reconnect');
    };
}
