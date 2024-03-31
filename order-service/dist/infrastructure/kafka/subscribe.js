"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSubscribe = void 0;
const addProductConsumer_1 = __importDefault(require("./consumers/addProductConsumer"));
const createSubscribe = () => {
    return {
        addproduct: addProductConsumer_1.default,
    };
};
exports.createSubscribe = createSubscribe;
