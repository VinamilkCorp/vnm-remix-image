export declare const textResponse: (status: number, message?: string) => Response;
export declare const imageResponse: (file: Uint8Array, status: number, contentType: string, cacheControl: string) => Response;
export declare const redirectResponse: (location: string) => Response;
