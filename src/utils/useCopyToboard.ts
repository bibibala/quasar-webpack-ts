import { copyToClipboard } from 'quasar';
import { MessageType, useToast } from 'src/utils/useToast';

export function copyTO(text: string) {
    copyToClipboard(`${text}`)
        .then(() => {
            useToast(MessageType.SUCCESS, '复制到剪贴板成功');
        })
        .catch(() => {
            useToast(MessageType.ERROR, '复制到剪贴板失败');
        });
}
