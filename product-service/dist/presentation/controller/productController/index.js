"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productListController_1 = __importDefault(require("./productListController"));
const addProductController_1 = __importDefault(require("./addProductController"));
exports.default = (dependencies) => {
    return {
        productList: (0, productListController_1.default)(dependencies),
        addproduct: (0, addProductController_1.default)(dependencies)
    };
};
