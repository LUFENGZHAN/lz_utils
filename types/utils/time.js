"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deftime = void 0;
const common_tool_1 = require("./common-tool");
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
        year = year - Math.round(Number(interval) / 12);
    }
    const days = new Date(year, date.getMonth() + 1, 0).getDate();
    let start = `${year}-${common_tool_1.default.tooltime(index)}-${common_tool_1.default.tooltime((date.getDate() - date.getDate() + 1))}`;
    let end = `${date.getFullYear()}-${common_tool_1.default.tooltime(date.getMonth() + 1)}-${common_tool_1.default.tooltime(days)}`;
    return [start, end];
};
exports.deftime = deftime;
exports.default = {
    deftime: exports.deftime
};
