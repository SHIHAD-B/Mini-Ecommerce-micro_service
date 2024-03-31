"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cartController_1 = __importDefault(require("../../presentation/controller/cartController"));
const cartRoutes = (dependencies) => {
    const router = (0, express_1.Router)();
    const { removeCart, cartList, addToCart } = (0, cartController_1.default)(dependencies);
    router.route('/addtocart').post(addToCart);
    router.route('/cartlist').get(cartList);
    router.route('/removecart').post(removeCart);
    return router;
};
exports.default = cartRoutes;
