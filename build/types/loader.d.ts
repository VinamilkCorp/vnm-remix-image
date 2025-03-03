import type { Cache } from "./cache";
import type { MimeType } from "./file";
import type { Resolver } from "./resolver";
import type { SizelessOptions, Transformer } from "./transformer";
export interface LoaderConfig {
    /** The URL for this Remix server. */
    selfUrl: string;
    /** A resolver function that handles retrieving image assets. (optional, default fetchResolver) */
    resolver?: Resolver;
    /** A transformer function that handles mutations of images. If this option is null, transformation will be skipped. (optional, default pureTransformer) */
    transformer?: Transformer | null;
    /** If RemixImage should fallback to the fallback mime type if the output type is not supported. (optional, default true) */
    useFallbackFormat?: boolean;
    /** The output mime type the image should fallback to if the provided output type is not supported. (optional, default MimeType.JPEG) */
    fallbackFormat?: MimeType;
    /** If RemixImage should fallback to the fallback transformer if custom transformer fails. (optional, default true) */
    useFallbackTransformer?: boolean;
    /** The transformer the loader should use if the provided custom transformer fails. (optional, default pureTransformer) */
    fallbackTransformer?: Transformer;
    /** A cache to store computed RemixImage transformations. (optional) */
    cache?: Cache | null;
    /** Default TransformOptions to use, can be overridden by the client. (optional) */
    defaultOptions?: SizelessOptions;
    /** Redirect image to original source if RemixImage fails. (optional, default false) */
    redirectOnFail?: boolean;
    /** A set of mime types that should be returned without transformation. (optional, default Set([MimeType.SVG]) */
    skipFormats?: Set<MimeType> | null;
    /** The base file path used for the resolver. (optional, default "public") */
    basePath?: string;
    /** An array of domains that assets can be fetched from. Set to null to disable. (optional, default null) */
    whitelistedDomains?: string[] | null;
    /** An array of domains that assets are not allowed to be fetched from. Only used if whitelistedDomains is not null. (optional, default null) */
    blacklistedDomains?: string[] | null;
    /** Enables verbose logging for debugging */
    verbose?: boolean;
}
export type AssetLoader = (config: LoaderConfig, request: Request) => Promise<Response>;
