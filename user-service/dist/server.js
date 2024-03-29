"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const user_routes_1 = __importDefault(require("./infrastructure/routes/user.routes"));
const env_1 = require("./config/envConfig/env");
const app = (0, express_1.default)();
const port = Number(env_1.PORT) || 4001;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_parser_1.default)());
app.use(user_routes_1.default);
app.use((err, req, res, next) => {
    console.error(err);
    const errorResponse = {
        errors: [{ message: "something went wrong" }]
    };
    return res.status(500).json(errorResponse);
});
app.use((0, cors_1.default)());
app.listen(port, () => {
    console.log('user service is running');
});
exports.default = app;
