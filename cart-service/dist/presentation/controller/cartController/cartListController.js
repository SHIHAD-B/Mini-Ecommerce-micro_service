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
    const { CartUseCase: { cartListUseCase } } = dependencies;
    const cartList = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { id } = req.body;
            if (!id || id.trim("") == "") {
                res.json({ message: "please enter the required field: id" });
            }
            else {
                const list = yield cartListUseCase(dependencies).interactor(req.body);
                if (!list)
                    res.json({ message: "issue in listin cart in controler" });
                else
                    res.json(list);
            }
        }
        catch (error) {
            console.log(error, "Error occured in cart list controller");
            next(error);
        }
    });
    return cartList;
};
