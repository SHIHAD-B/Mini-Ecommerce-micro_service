"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const addUser_1 = __importDefault(require("./addUser"));
exports.default = (dependecies) => {
    return {
        addusers: (0, addUser_1.default)(dependecies)
    };
};
