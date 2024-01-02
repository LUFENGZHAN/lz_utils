"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tooltime = void 0;
const tooltime = (month) => String(month).padStart(2, '0');
exports.tooltime = tooltime;
exports.default = {
    tooltime: exports.tooltime
};
