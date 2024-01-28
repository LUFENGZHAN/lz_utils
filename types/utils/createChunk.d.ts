export declare const createChunkBlob: (file: File, size: number) => createChunkBlobType[];
export declare const createChunk: (file: File, index: number, size: number) => Promise<createChunkType>;
export interface createChunkBlobType {
    file: Blob;
    start: number;
    end: number;
    hash: string;
    type: string;
    name: string;
}
export interface createChunkType extends createChunkBlobType {
}
