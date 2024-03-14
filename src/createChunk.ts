import SparkMD5 from "spark-md5"
export const createChunkBlob = (file: File, size: number):createChunkBlobType[] => {
    const chunks = [];
    let offset = 0;
    while (offset < file.size) {
        chunks.push({
            file: file.slice(offset, offset + size),
            start: offset,
            end: offset + size,
            hash:`${file.name}-${offset}`,
            type:file.type,
            name:file.name
        });
        offset += size;
    }
    return chunks;
}
export const createChunk = (file: File, index: number,size:number):Promise<createChunkType>=> {
    return new Promise((resolve, reject) =>{
        const start = index +size
        const end = start  + size;
        const spark = new SparkMD5.ArrayBuffer();
        const reader = new FileReader();
        reader.onload = function(e:any){
            spark.append(e.target.result);
            const md5 = spark.end();
            resolve({
                file:file.slice(start, end),
                start:start,
                end:end,
                hash:md5,
                type:file.type,
                name:file.name
            })
        }
        reader.readAsArrayBuffer(file.slice(start, end));
    })
}
export interface createChunkBlobType {
    file:Blob,
    start:number,
    end:number,
    hash:string
    type:string,
    name:string
}
export interface createChunkType extends createChunkBlobType{}
