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
    const { CartUseCase: { removeCartUseCase } } = dependencies;
    const removeCart = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { productId } = req.body;
            if (!productId || productId.trim("") == "") {
                res.json({ message: "please enter the required data : productId" });
            }
            else {
                const remove = yield removeCartUseCase(dependencies).interactor(req.body);
                if (!remove)
                    res.json({ message: "Issue occured in deleting product from cart" });
                else
                    res.json({ message: "Product removed from the cart successfully....." });
            }
        }
        catch (error) {
            console.log(error, "Error occured in remove cart controller");
            next(error);
        }
    });
    return removeCart;
};
