import { formatNumber, isNumericString } from "./tool"
import CryptoJs from 'crypto-js'
import { createChunk, createChunkType as ChunkType, createChunkBlob, createChunkBlobType as ChunkBlobType } from "./createChunk"
export type createChunkType = ChunkType
export type createChunkBlobType = ChunkBlobType
/**
 * 计算两个字符串表示的数字之和
 * @param {string} start 第一个数字
 * @param {string} end 第二个数字
 * @returns {string} - 两个数字之和
 */
export const MaxNum = (start: string, end: string): String => {
    if (!start || !end || typeof start !== 'string' || typeof end !== 'string') {
        throw new Error('Invalid input: Both parameters must be non-empty strings')
    }
    if (!isNumericString(start) || !isNumericString(end)) {
        throw new Error('Must be a numeric string')
    }
    const len = Math.max(start.length, end.length)
    start = start.padStart(len, '0')
    end = end.padStart(len, '0')
    let carry = 0
    let result = ''
    for (let i = len - 1; i >= 0; i--) {
        const sum = +start[i] + +end[i] + carry
        result = (sum % 10) + result
        carry = Math.floor(sum / 10)
        if (sum > 9) {
            carry = 1
        } else {
            carry = 0
        }
    }
    return result
}

/**
 * 
 *  defTime 时间区间
 * @param {number} interval 间隔月数或当前月份
 * @param {boolean} _bool 是否从当天启始
 * @returns {Array<string>} - 包含起始日期和结束日期的数组
 */
export const defTime = (interval: number = 1, _bool: boolean = false): Array<string> => {
    const date = new Date()
    const months = [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    interval = Number(interval) || 1
    _bool ? interval : interval--
    let index = Number(interval) === 0 ? month : month - Number(interval)
    if (index < 1) {
        index = months[Math.abs(index) % 12]
        year = year - Math.ceil(Number(interval) / 12)
    }
    const daysInMonth = new Date(year, date.getMonth() + 1, 0).getDate()
    let start = `${year}-${formatNumber(index)}-${formatNumber((_bool ? date.getDate() : 1))}`
    let end = `${date.getFullYear()}-${formatNumber(date.getMonth() + 1)}-${_bool ? date.getDate() : formatNumber(daysInMonth)}`
    return [start, end]
}
/**
 * 文件分片
 * @param {File} file 文件
 * @param {number} size 切片大小
 * @param {Boolean} isMd5 是否使用md5作为hash
 */
export const cuFile = async (file: File, size: number = 5, isMd5: Boolean = false): Promise<ChunkType[] | ChunkBlobType[]> => {
    if (!file) return []
    const CHUNK_SIZE = Math.round(size) * 1024 * 1024
    const chunkCount = Math.ceil(file.size / CHUNK_SIZE)
    const result: ChunkBlobType[] = []
    if (!isMd5) {
        return createChunkBlob(file, CHUNK_SIZE)
    }
    for (let i = 0; i < chunkCount; i++) {
        const chunk = await createChunk(file, i, CHUNK_SIZE)
        result.push(chunk)
    }
    return result
}
/**
 * crypto-js加密
 * @param {*} value 内容
 * @param {string}key key值
 * @param {boolean}md5 是否把您传入的key值转为MD5
 * @returns {encryptType} 包含key值和密文的对象
 */
export const encrypt = (value: any, key?: string, md5?: boolean): encryptType => {
    const keyStr = md5 && key ? CryptoJs.MD5(key).toString() : key ? key : CryptoJs.MD5(value).toString()
    const encrypts = CryptoJs.AES.encrypt(JSON.stringify(value), keyStr)
    return {
        value: encrypts.toString(),
        key: keyStr
    }
}
/**
 * crypto-js解密
 * @param {*} value 内容
 * @param {string}key key值
 */
export const decrypt = (value: any, key: string) => {
    let decrypts = CryptoJs.AES.decrypt(value, key).toString(CryptoJs.enc.Utf8)
    return (decrypts && JSON.parse(decrypts)) || null
}
/**
 * 文件下载函数
 * @param {Blob} data - 文件数据
 * @param {string} filename - 下载文件的名称
 * @param {string} fileType - 文件类型，如 'pdf', 'word', 'excel', 'ppt'
 */
type FileType = 'pdf' | 'doc' | 'docx' | 'xls' | 'xlsx' | 'ppt' | 'pptx' | 'zip';
const mimeTypes: Record<FileType, string> = {
    pdf: "application/pdf",
    doc: "application/msword",
    docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    xls: "application/vnd.ms-excel",
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    ppt: "application/vnd.ms-powerpoint",
    pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    zip: "application/zip",
};
export const downloadFile = (data: Blob, fileType: FileType, filename?: string,is_blob:boolean =true) => {
    if (!(data instanceof Blob)&&is_blob) {
        throw new Error('Invalid input: data must be a Blob');
    }
    const type = mimeTypes[fileType] || fileType
    try {
        const blob = new Blob([data], { type });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename || '文件';
        a.click();
        window.URL.revokeObjectURL(url);
        return url
    } catch (error) {
        console.error('Error creating or downloading the file:', error);
        return ''
    }

};
export default {
    MaxNum,
    defTime,
    cuFile,
    encrypt,
    decrypt,
    downloadFile
}
interface encryptType {
    value: string,
    key: string
}