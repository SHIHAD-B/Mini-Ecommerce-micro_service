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
exports.default = (dependecies) => {
    const { orderUseCases: { orderProduct } } = dependecies;
    const order_product = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const order = yield orderProduct(dependecies).interactor(req.body);
            if (!order) {
                res.json({ message: "something went wrong in ordering product in order product controller" });
            }
            else {
                res.json({ message: "order placed successfully" });
            }
        }
        catch (error) {
            console.log(error, "Error occured in order product controller");
        }
    });
    return order_product;
};
