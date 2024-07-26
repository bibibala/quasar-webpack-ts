import { Key } from 'src/utils/useStatic';
import axios, { AxiosResponse } from 'axios';
import { MessageType, useToast } from 'src/utils/useToast';

export async function downloadFile(data: any, url: string): Promise<void> {
    try {
        const response: AxiosResponse<Blob> = await axios({
            data,
            method: 'POST',
            url: `${process.env.APP_URL}${url}`,
            responseType: 'blob',
            headers: {
                'System-Type': 'WEB_TOKEN',
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json;charset=utf-8'
            }
        });

        response.headers[Key.ACCESS_TOKEN] = Key.haveToken() ? Key.getToken() : '';
        const contentType = response.headers['content-type'];
        const contentDisposition = response.headers['content-disposition'];

        if (contentType === 'application/json') {
            const reader = new FileReader();
            2;
            reader.readAsText(response.data);
            reader.onload = (event) => {
                const { msg } = JSON.parse((event.target as FileReader).result as string);
                useToast(MessageType.ERROR, `下载失败,${msg}`);
            };
        } else {
            const link = document.createElement('a');
            const blob = new Blob([response.data], { type: 'application/vnd.ms-excel' });
            link.style.display = 'none';
            link.href = URL.createObjectURL(blob);

            let filename = 'downloaded_file';
            if (contentDisposition) {
                const filenameRegex = /filename[^;=\n]*=((['"]).*?\|[^;\n]*)/;
                const matches = filenameRegex.exec(contentDisposition);
                if (matches) {
                    filename = decodeURI(matches[1].replace(/['"]/g, ''));
                }
            }

            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            useToast(MessageType.SUCCESS, '下载成功');
        }
    } catch (error) {
        useToast(MessageType.ERROR, '下载失败');
    }
}
