import { MessageType, useToast } from 'src/utils/useToast';
import { Decoder, Encoder, ErrorCorrectionLevel } from '@nuintun/qrcode';

function isBase64Image(src: string) {
    const base64Regex = /^data:image\/(png|jpeg|jpg|gif);base64,/;
    if (!base64Regex.test(src)) {
        throw new Error('必须是一个 base64 格式的图片。');
    }
}

export function getCodeImageUrl(data: string) {
    const qrcode = new Encoder();
    qrcode.setEncodingHint(true);
    qrcode.setErrorCorrectionLevel(ErrorCorrectionLevel.H);
    qrcode.write(data);
    qrcode.make();
    return qrcode.toDataURL();
}

function getBase64(file: any): Promise<string | ArrayBuffer | null> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
}

export async function getShareCodeFromImage(image: any) {
    try {
        const response = await getBase64(image);
        if (response && typeof response === 'string') {
            const qrcode = new Decoder();
            try {
                const result = await qrcode.scan(response);
                return result.data;
            } catch {
                useToast(MessageType.WARN, '二维码解析失败');
                return null;
            }
        } else {
            useToast(MessageType.WARN, '二维码转译失败');
            return null;
        }
    } catch (error) {
        useToast(MessageType.WARN, '文件读取失败');
        return null;
    }
}

export async function writeImgToClip(src: string): Promise<void> {
    isBase64Image(src);
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.src = src;

    await new Promise<void>((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = () => reject(new Error('图片加载失败'));
    });

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) {
        throw new Error('无法获取 2D 上下文');
    }

    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);

    const handleSuccess = () => {
        useToast(MessageType.SUCCESS, '图片复制成功');
    };

    const handleError = () => {
        useToast(MessageType.WARN, '图片复制失败');
    };

    try {
        canvas.toBlob(async (blob) => {
            if (blob) {
                if (navigator.clipboard && navigator.clipboard.write) {
                    await navigator.clipboard.write([
                        new ClipboardItem({ 'image/png': blob }),
                    ]);
                    handleSuccess();
                } else {
                    const a = document.createElement('a');
                    a.href = URL.createObjectURL(blob);
                    a.download = 'image.png';
                    a.click();
                    handleSuccess();
                }
            } else {
                handleError();
            }
        }, 'image/png');
    } catch (error) {
        handleError();
    }
}
