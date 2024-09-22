// File: src/types/nuintun-qrcode.d.ts

declare module '@nuintun/qrcode' {
    export class Encoder {
        setEncodingHint(hint: boolean): void;
        setErrorCorrectionLevel(level: string): void;
        write(data: any): void;
        make(): void;
        toDataURL(): string;
    }

    export class Decoder {
        scan(data: string): Promise<{ data: string }>;
    }

    export const ErrorCorrectionLevel: {
        L: string;
        M: string;
        Q: string;
        H: string;
    };

    export { Encoder as default };
}
