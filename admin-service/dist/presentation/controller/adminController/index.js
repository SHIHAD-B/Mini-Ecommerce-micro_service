"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const adminLogin_1 = __importDefault(require("./adminLogin"));
const addAdmin_1 = __importDefault(require("./addAdmin"));
exports.default = (dependencies) => {
    return {
        adminLoginController: (0, adminLogin_1.default)(dependencies),
        addAdminController: (0, addAdmin_1.default)(dependencies)
    };
};
