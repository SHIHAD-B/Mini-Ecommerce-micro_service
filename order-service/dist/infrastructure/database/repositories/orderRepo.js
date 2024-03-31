"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderProduct_repo = exports.orderList_repo = void 0;
const orderSchema_1 = require("../schema/orderSchema");
const productSchema_1 = __importDefault(require("../schema/productSchema"));
const orderList_repo = (credential) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('reached order list repo');
        const orders = yield orderSchema_1.Orders.findOne({ userId: credential.userId });
        if (orders)
            return orders;
        else
            return false;
    }
    catch (error) {
        console.error("error occured in order list repo");
        return false;
    }
});
exports.orderList_repo = orderList_repo;
const orderProduct_repo = (credential) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("reached order product repo");
        const product = yield productSchema_1.default.findOne({ _id: credential.productId });
        if (!product) {
            return false;
        }
        else {
            credential.orderDate = new Date();
            credential.total = product.price * credential.quantity;
            const order = yield orderSchema_1.Orders.create(Object.assign({}, credential));
            if (order)
                return order;
            else
                return false;
        }
    }
    catch (error) {
        console.log(error, "Error occured in order product repo");
        return false;
    }
});
exports.orderProduct_repo = orderProduct_repo;
