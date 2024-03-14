import { createChunkType as ChunkType, createChunkBlobType as ChunkBlobType } from "./createChunk";
export type createChunkType = ChunkType;
export type createChunkBlobType = ChunkBlobType;
/**
 * 计算大整数之和
 * @param {*} start string
 * @param {*} end string
 */
export declare const MaxNum: (start: string, end: string) => String;
/**
 *
 * @param interval 区间
 * @example deftime(2)  [ '2023-04-01', '2023-06-30' ]
 */
export declare const deftime: (interval?: string | number) => Array<string>;
/**
 * 文件分片
 * @param {File} file 文件
 * @param {number} size 切片大小
 * @param {Boolean} isMd5 是否使用md5作为hash
 */
export declare const cuFile: (file: File, size?: number, isMd5?: Boolean) => Promise<ChunkType[] | ChunkBlobType[]>;
declare const _default: {
    MaxNum: (start: string, end: string) => String;
    deftime: (interval?: string | number) => string[];
    cuFile: (file: File, size?: number, isMd5?: Boolean) => Promise<ChunkBlobType[] | ChunkType[]>;
};
export default _default;
