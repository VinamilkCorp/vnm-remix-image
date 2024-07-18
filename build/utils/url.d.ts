import type { TransformOptions } from "../types/transformer";
export declare const decodeQuery: (queryParams: URLSearchParams, key: string) => string | null;
export declare const encodeQuery: (url: string, query: Record<string, any>) => string;
export declare const decodeTransformQuery: (queryString: string) => Partial<TransformOptions>;
export declare const parseURL: (rawUrl: string, baseUrl?: string) => URL;
