"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = __importDefault(require("../../presentation/controller/productController"));
const productRoute = (dependencies) => {
    const router = (0, express_1.Router)();
    const { productList, addproduct } = (0, productController_1.default)(dependencies);
    router.route('/productlist').get(productList);
    router.route('/addproduct').post(addproduct);
    return router;
};
exports.default = productRoute;
