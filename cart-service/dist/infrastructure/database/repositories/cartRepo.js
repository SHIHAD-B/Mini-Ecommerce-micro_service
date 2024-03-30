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
exports.removeFromCart_repo = exports.cartList_repo = exports.addToCart_repo = void 0;
const productSchema_1 = __importDefault(require("../schema/productSchema"));
const cartSchema_1 = __importDefault(require("../schema/cartSchema"));
const addToCart_repo = (credential) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("reached cart  repo");
        const product = yield productSchema_1.default.findOne({ _id: credential.productId });
        if (!product) {
            return false;
        }
        else {
            const addedCart = yield cartSchema_1.default.create({
                userId: credential.userId,
                productId: product._id,
                quantity: credential.quantity,
                price: credential.quantity * product.price
            });
            if (addedCart)
                return addedCart;
            else
                return false;
        }
    }
    catch (error) {
        console.error("Error in  product adding to cart", error);
        return false;
    }
});
exports.addToCart_repo = addToCart_repo;
const cartList_repo = (Credential) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cartlist = yield cartSchema_1.default.find({ userId: Credential.id });
        if (cartlist)
            return cartlist;
        else
            return false;
    }
    catch (error) {
        console.error("Error in listing cart", error);
        return false;
    }
});
exports.cartList_repo = cartList_repo;
const removeFromCart_repo = (Credential) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield cartSchema_1.default.deleteOne({ productId: Credential.productId });
        if (product)
            return true;
        else
            return false;
    }
    catch (error) {
        console.error("Error in removing product from cart", error);
        return false;
    }
});
exports.removeFromCart_repo = removeFromCart_repo;
