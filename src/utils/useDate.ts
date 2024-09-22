import { date } from 'quasar';

const { formatDate } = date;

type DateType = number | string;

export function FormatDateTime(datetime: DateType): DateType {
    return formatDate(datetime, 'YYYY-MM-DD HH:mm:ss');
}

export function FormatDate(datetime: DateType): DateType {
    return formatDate(datetime, 'YYYY-MM-DD');
}

export function FormatDateTimeShort(datetime: DateType): DateType {
    return formatDate(datetime, 'YYYYMMDDHHmmss');
}
