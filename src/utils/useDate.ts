import { date } from 'quasar';

const { formatDate } = date;

export function FormatDateTime(datetime: Date): string {
    return formatDate(datetime, 'YYYY-MM-DD HH:mm:ss');
}

export function FormatDate(datetime: Date): string {
    return formatDate(datetime, 'YYYY-MM-DD');
}

export function FormatDateTimeShort(datetime: Date): string {
    return formatDate(datetime, 'YYYYMMDDHHmmss');
}
