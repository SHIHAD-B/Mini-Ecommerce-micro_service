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
    const { productUseCases: { productList } } = dependencies;
    const productlist = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const products = yield productList(dependencies).interactor();
            if (products) {
                res.json(products);
            }
            else {
                res.json({ message: "something went wrong in fetching product" });
            }
        }
        catch (error) {
            console.log(error, "error occured in product list controller");
        }
    });
    return productlist;
};
