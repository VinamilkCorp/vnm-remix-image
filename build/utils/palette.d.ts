import type { Color } from "../types";
export declare const rgbToHex: (r: number, g: number, b: number) => number;
export declare const generatePalette: (buffer: Uint8Array, count: number) => Color[];
/**
 * Maps the pixels in an RGBA image to the index of the closest color in a palette
 * @param image The image to map
 * @param palette The palette to map pixels to
 */
export declare const mapImage: (image: Uint8Array, palette: Color[]) => number[];
