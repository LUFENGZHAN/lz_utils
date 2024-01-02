"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deftime = exports.MaxNum = void 0;
const tool_1 = require("./utils/tool");
/**
 * 计算大整数之和
 * @param {*} start string
 * @param {*} end string
 */
const MaxNum = (start, end) => {
    if (!start && !end) {
        throw new Error('Two parameters cannot be empty');
    }
    if (typeof (start) !== 'string' || typeof (end) !== 'string') {
        throw new TypeError('Can only be a string');
    }
    const len = Math.max(start.length, end.length);
    start = start.padStart(len, '0');
    end = end.padStart(len, '0');
    let carry = 0;
    let result = '';
    for (let i = len - 1; i >= 0; i--) {
        const sum = +start[i] + +end[i] + carry;
        result = (sum % 10) + result;
        carry = Math.floor(sum / 10);
        if (sum > 9) {
            carry = 1;
        }
        else {
            carry = 0;
        }
    }
    return result;
};
exports.MaxNum = MaxNum;
/**
 *
 * @param interval 区间
 * @example deftime(2)  [ '2023-04-01', '2023-06-30' ]
 */
const deftime = (interval = 0) => {
    const date = new Date();
    const months = [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let index = Number(interval) === 0 ? month : month - Number(interval);
    if (index < 1) {
        index = months[Math.abs(index) % 12];
        year = year - Math.ceil(Number(interval) / 12);
    }
    const days = new Date(year, date.getMonth() + 1, 0).getDate();
    let start = `${year}-${tool_1.default.tooltime(index)}-${tool_1.default.tooltime((date.getDate() - date.getDate() + 1))}`;
    let end = `${date.getFullYear()}-${tool_1.default.tooltime(date.getMonth() + 1)}-${tool_1.default.tooltime(days)}`;
    return [start, end];
};
exports.deftime = deftime;
exports.default = {
    MaxNum: exports.MaxNum,
    deftime: exports.deftime,
};
