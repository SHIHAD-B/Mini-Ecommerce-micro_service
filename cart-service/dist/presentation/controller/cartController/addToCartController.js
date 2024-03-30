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
    const { CartUseCase: { addToCartUseCase } } = dependencies;
    const addToCart = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { userId, productId, quantity } = req.body;
            if (!userId || userId.trim("") == "" || !productId || productId.trim("") == "" || !quantity || quantity < 0) {
                res.json({ message: "please enter the data correctly :userId productId quantity" });
            }
            else {
                const cartProduct = yield addToCartUseCase(dependencies).interactor(req.body);
                if (!cartProduct)
                    res.json({ message: "issue in adding product to cart" });
                else
                    res.json({ message: "product added to cart sucessfully" });
            }
        }
        catch (error) {
            console.log(error, "Error occured in adding to cart controller");
            next(error);
        }
    });
    return addToCart;
};
