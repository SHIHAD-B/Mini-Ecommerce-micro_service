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
const bcrypt_1 = require("bcrypt");
const generateToken_1 = __importDefault(require("../../../util/jwt/generateToken"));
exports.default = (dependencies) => {
    const { userUseCases: { login } } = dependencies;
    const userLogin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { email, password } = req.body;
            if (!email || email.trim("") == "" || !password || password.trim("") == "") {
                res.json({ message: `please fill out all the rerquired fields: email and password` });
            }
            else {
                const user = yield login(dependencies).interactor(req.body);
                console.log("user controller reached");
                console.log("email" + email);
                console.log("password" + password);
                console.log("user" + user);
                if (!user)
                    throw new Error("user is not found");
                const match = yield (0, bcrypt_1.compare)(password, user.password);
                if (!match) {
                    res.json({ message: `incorrect password` });
                    throw new Error("password is incorrect");
                }
                else {
                    const token = (0, generateToken_1.default)({
                        _id: user._id,
                        role: user.role,
                        Isblocked: user.isblocked
                    });
                    res.cookie("auth", token, {
                        maxAge: 1000 * 60 * 60 * 24,
                        httpOnly: true
                    });
                    res.status(201).json({ success: true, data: user, message: "user logged-in~~~~~~~~~~" });
                }
            }
        }
        catch (error) {
            next(error);
        }
    });
    return userLogin;
};
