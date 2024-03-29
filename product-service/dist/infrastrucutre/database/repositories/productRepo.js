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
exports.addProduct_repo = exports.productList_repo = void 0;
const productSchema_1 = require("../schema/productSchema");
const productList_repo = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("reached product repo");
        const products = yield productSchema_1.Products.find();
        if (products) {
            return products;
        }
        else {
            return false;
        }
    }
    catch (error) {
        console.error("Error in fetching data from db in repo:", error);
        return false;
    }
});
exports.productList_repo = productList_repo;
const addProduct_repo = (product) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products_ = yield productSchema_1.Products.create(Object.assign({}, product));
        if (products_)
            return products_;
        else
            return false;
    }
    catch (error) {
        console.error("Error in addin product to the database:", error);
        return false;
    }
});
exports.addProduct_repo = addProduct_repo;
// export const orderProduct_repo = async (productid: IProduct["_id"]): Promise<IProduct | boolean> => {
//     try {
//         console.log("reached order product repo")
//         const product = await Products.findOne({ _id: productid })
//         if (product) return product
//         else return false
//     } catch (error) {
//         console.error("Error in ordering product", error)
//         return false
//     }
// }
// export const addToCart_repo = async (productid: IProduct["_id"]): Promise<IProduct | boolean> => {
//     try {
//         console.log("reached order product repo")
//         const product = await Products.findOne({ _id: productid })
//         if (product) return product
//         else return false
//     } catch (error) {
//         console.error("Error in ordering product", error)
//         return false
//     }
// }
