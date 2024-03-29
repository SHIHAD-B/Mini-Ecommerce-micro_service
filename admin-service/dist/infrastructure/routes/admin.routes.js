"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const adminController_1 = __importDefault(require("../../presentation/controller/adminController"));
const userController_1 = __importDefault(require("../../presentation/controller/userController"));
const productController_1 = __importDefault(require("../../presentation/controller/productController"));
const adminRoutes = (dependencies) => {
    console.log("reached admin routes");
    const router = (0, express_1.Router)();
    const { addAdminController, adminLoginController } = (0, adminController_1.default)(dependencies);
    const { addusers } = (0, userController_1.default)(dependencies);
    const { addproducts } = (0, productController_1.default)(dependencies);
    router.route('/login').post(adminLoginController);
    router.route('/addAdmin').post(addAdminController);
    router.route('/adduser').post(addusers);
    router.route('/addproduct').post(addproducts);
    return router;
};
exports.default = adminRoutes;
