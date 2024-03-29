"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("../../presentation/controller");
const orderRouter = (dependencies) => {
    const router = (0, express_1.Router)();
    const { orderListController } = (0, controller_1.orderController)(dependencies);
    router.route('/orderlist').get(orderListController);
    return router;
};
exports.default = orderRouter;
