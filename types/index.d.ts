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
declare const _default: {
    MaxNum: (start: string, end: string) => String;
    deftime: (interval?: string | number) => string[];
};
export default _default;
