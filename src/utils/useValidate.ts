export const validate = {
    number: (v: string) => /^[1-9]\d*$/.test(v) || '必须为正整数',
    positive: (v: string) =>
        /^\s*[0-9]+(\.[0-9]+)?\s*$/.test(v) || '只能为正数',
    // 小数,负数,只要是数字就可以
    regNumber: (v: string) => /^-?\d+(\.\d+)?$/.test(v) || '只能为数字',
    length: (v: string) => /^.{0,250}$/.test(v) || '不能大于250个字符',
    phone: (v: string) => /^1[3456789]\d{9}$/.test(v) || '请输入正确的手机号码',
    required: (v: string | null | undefined): boolean | string => {
        return v != null && v.trim() !== '' || '此为必填项';
    },
    email: (v: string) =>
        /^([a-zA-Z0-9]+[-_\.]?)+@[a-zA-Z0-9]+\.[a-z]+$/.test(v) ||
        '请输入正确的邮箱地址'
};

export const accept = {
    acceptPic: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
    acceptExcel:
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel',
    other: 'image/*, application/pdf, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/msword'
};
