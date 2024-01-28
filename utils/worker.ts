import { createChunk } from "./createChunk"
onmessage = async (e: MessageEvent) => {
    const proms:any = []
    const { file,
        CHUNK_SIZE,
        startIndex,
        endIndex } = e.data;
        console.log(e.data);
        
    for (let i = startIndex; i < endIndex; i++) {
        proms.push(createChunk(file, i, CHUNK_SIZE))
    }
    const chunks = await Promise.all(proms)
    postMessage(chunks)
}