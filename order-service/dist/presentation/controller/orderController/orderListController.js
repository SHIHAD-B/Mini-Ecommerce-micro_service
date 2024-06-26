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
exports.default = (dependencies) => {
    const { orderUseCases: { orderList } } = dependencies;
    const order_List = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const userId = req.query.userId;
            const orders = yield orderList(dependencies).interactor({ userId });
            if (orders) {
                res.json(orders);
            }
            else {
                res.json({ message: "something went wrong in fetching data from orders database" });
            }
        }
        catch (error) {
            console.log(error, "Error occured in fetching orders from database.........");
        }
    });
    return order_List;
};
