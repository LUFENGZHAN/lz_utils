"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaxNum = void 0;
/**
 * 计算大整数之和
 * @param {*} start string
 * @param {*} end string
 */
var MaxNum = function (start, end) {
    if (!start && !end) {
        throw new Error('Two parameters cannot be empty');
    }
    var len = Math.max(start.length, end.length);
    start = start.padStart(len, '0');
    end = end.padStart(len, '0');
    var carry = 0;
    var result = '';
    for (var i = len - 1; i >= 0; i--) {
        var sum = +start[i] + +end[i] + carry;
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
exports.default = {
    MaxNum: exports.MaxNum
};
