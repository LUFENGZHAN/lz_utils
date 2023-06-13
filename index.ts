/**
 * 计算大整数之和
 * @param {*} start string
 * @param {*} end string
 */
export const MaxNum = (start:string,end:string):String => {
    if (!start && !end) {
        throw new Error('Two parameters cannot be empty')
    }
    if (typeof(start) !== 'string' || typeof(end) !== 'string') {
        throw new TypeError('Can only be a string')
    }
    const len = Math.max(start.length, end.length)
    start = start.padStart(len,'0')
    end = end.padStart(len,'0')
    let carry = 0
    let result = ''
    for (let i = len -1; i >=0 ; i--) {
        const sum = +start[i] + +end[i] + carry
        result = (sum %10) + result
        carry = Math.floor(sum / 10)
        if(sum> 9){
            carry = 1
        }else{
            carry = 0
        }
    }
    return result
}
export default {
    MaxNum
}