import { ResponsiveSize } from "../../types";
import { OnLoadingComplete } from "./types";
export type ImgElementWithDataProp = HTMLImageElement & {
    "data-loaded-src": string | undefined;
};
export declare function computePlaceholderSize(sizes: ResponsiveSize[] | undefined, aspectRatio: number | null): {
    width: number;
    height: number;
};
export declare function handleLoading(img: ImgElementWithDataProp, src: string, onLoadingComplete: OnLoadingComplete | null | undefined): void;
