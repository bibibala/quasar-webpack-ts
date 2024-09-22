import { Notify } from 'quasar';

export enum MessageType {
    SUCCESS,
    INFO,
    WARN,
    ERROR,
}

export function useToast(type: MessageType, content: string) {
    switch (type) {
        case MessageType.SUCCESS:
            showSuccess(content);
            break;
        case MessageType.INFO:
            showInfo(content);
            break;
        case MessageType.WARN:
            showWarn(content);
            break;
        case MessageType.ERROR:
            showError(content);
            break;
    }
}

function showSuccess(content: string) {
    Notify.create({
        message: content,
        icon: 'mdi-check-circle-outline',
        progress: true,
        type: 'positive',
        position: 'top-right',
        timeout: 600,
        // 显示关闭按钮
        // closeBtn:true
    });
}

function showWarn(content: string) {
    Notify.create({
        message: content,
        icon: 'mdi-alert-outline',
        progress: true,
        type: 'warning',
        position: 'top-right',
        timeout: 3000,
    });
}

function showInfo(content: string) {
    Notify.create({
        message: content,
        icon: 'mdi-information-outline',
        progress: true,
        type: 'info',
        position: 'top-right',
        timeout: 2000,
    });
}

function showError(content: string) {
    Notify.create({
        message: content,
        icon: 'mdi-close-circle-outline',
        progress: true,
        type: 'negative',
        position: 'top-right',
        timeout: 3000,
    });
}
