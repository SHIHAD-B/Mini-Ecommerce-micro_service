"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("../../presentation/controller");
const orderRouter = (dependencies) => {
    const router = (0, express_1.Router)();
    const { orderListController, orderProductController } = (0, controller_1.orderController)(dependencies);
    router.route('/orderlist').get(orderListController);
    router.route('/orderproduct').post(orderProductController);
    return router;
};
exports.default = orderRouter;
