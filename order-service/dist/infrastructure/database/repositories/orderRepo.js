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
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderList_repo = void 0;
const orderSchema_1 = require("../schema/orderSchema");
const orderList_repo = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('reached order list repo');
        const orders = yield orderSchema_1.Orders.find();
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
