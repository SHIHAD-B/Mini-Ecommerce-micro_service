"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const addProduct_1 = __importDefault(require("./addProduct"));
exports.default = (dependencies) => {
    return {
        addproducts: (0, addProduct_1.default)(dependencies)
    };
};
