import { ClientLoader } from "../types/client";
import type { ResponsiveSize } from "../types/image";
import type { SizelessOptions } from "../types/transformer";
export type ImageSource = {
    src?: string;
};
export type ResponsiveHookResult = {
    src: string;
    srcSet?: string;
    sizes?: string;
};
export declare function useResponsiveImage(image: ImageSource, responsive: ResponsiveSize[], options?: SizelessOptions, dprVariants?: number | number[], loaderUrl?: string, loader?: ClientLoader): ResponsiveHookResult;
