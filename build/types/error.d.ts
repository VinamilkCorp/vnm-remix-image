export declare class RemixImageError extends Error {
    errorCode: number;
    constructor(message: string, errorCode?: number);
    toString(): string;
}
export declare class UnsupportedImageError extends RemixImageError {
    constructor(message: string);
}
