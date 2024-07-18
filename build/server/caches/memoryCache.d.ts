import LRU from "lru-cache";
import { Cache, CacheConfig, CacheStatus } from "../../types/cache";
export interface MemoryCacheConfig extends CacheConfig {
    /**
     * Max Size: the max size of the cache in bytes
     */
    maxSize: number;
}
export declare class MemoryCache extends Cache {
    config: MemoryCacheConfig;
    cache: LRU<string, Uint8Array>;
    constructor(config?: Partial<MemoryCacheConfig> | null | undefined);
    status(key: string): Promise<CacheStatus>;
    has(key: string): Promise<boolean>;
    get(key: string): Promise<Uint8Array | null>;
    set(key: string, resultImg: Uint8Array): Promise<void>;
    clear(): Promise<void>;
}
