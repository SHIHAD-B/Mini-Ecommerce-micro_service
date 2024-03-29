"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const login_1 = __importDefault(require("./login"));
const signup_1 = __importDefault(require("./signup"));
exports.default = (dependencies) => {
    return {
        signupController: (0, signup_1.default)(dependencies),
        loginController: (0, login_1.default)(dependencies)
    };
};
