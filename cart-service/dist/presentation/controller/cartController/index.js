"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const addToCartController_1 = __importDefault(require("./addToCartController"));
const cartListController_1 = __importDefault(require("./cartListController"));
const removeCartController_1 = __importDefault(require("./removeCartController"));
exports.default = (dependencies) => {
    return {
        addToCart: (0, addToCartController_1.default)(dependencies),
        cartList: (0, cartListController_1.default)(dependencies),
        removeCart: (0, removeCartController_1.default)(dependencies)
    };
};
