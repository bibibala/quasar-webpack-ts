import { xhr } from 'boot/axios';


export function upload(file: File, data: any, url: string) {
    const formDataUpload = new FormData();
    formDataUpload.append('file', file);
    if (data && data instanceof Object) {
        Object.keys(data).forEach(key => {
            formDataUpload.append(`${key}`, data[key]);
        });
    }
    return xhr.file(`${url}`, formDataUpload);
}
