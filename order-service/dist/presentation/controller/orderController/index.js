"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const orderListController_1 = __importDefault(require("./orderListController"));
const orderProductController_1 = __importDefault(require("./orderProductController"));
exports.default = (dependencies) => {
    return {
        orderListController: (0, orderListController_1.default)(dependencies),
        orderProductController: (0, orderProductController_1.default)(dependencies)
    };
};
