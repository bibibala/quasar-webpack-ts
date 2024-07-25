import { xhr } from 'boot/axios';


export function upload(file: File, data: any, url: string) {
    let form = new FormData();
    form.append('file', file);
    if (data && data instanceof Object) {
        Object.keys(data).forEach(key => {
            form.append(`${key}`, data[key]);
        });
    }
    return xhr.file(`${url}`, form);
}
