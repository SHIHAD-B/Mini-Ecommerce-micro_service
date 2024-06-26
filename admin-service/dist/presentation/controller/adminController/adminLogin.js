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
const bcrypt_1 = __importDefault(require("bcrypt"));
const generateToken_1 = __importDefault(require("../../../util/jwt/generateToken"));
exports.default = (dependencies) => {
    const { adminUseCases: { adminLogin } } = dependencies;
    const admin_login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { email, password } = req.body;
            if (!email || email.trim("") == "" || !password || password.trim("") == "") {
                res.json({ message: "please enter the required fields : email and password" });
            }
            else {
                const admin = yield adminLogin(dependencies).interactor({ email });
                if (!admin) {
                    res.json({ message: "user not found" });
                }
                else {
                    const match = bcrypt_1.default.compare(password, admin.password);
                    if (!match) {
                        res.json({ message: "incorrect password" });
                    }
                    else {
                        const token = (0, generateToken_1.default)({
                            _id: admin._id,
                            role: admin.role,
                            email: admin.email
                        });
                        res.cookie("adminauth", token, {
                            maxAge: 1000 * 60 * 60 * 24,
                            httpOnly: true
                        });
                        res.json({ message: "Admin logged in successfully~~~~~~~~~~~~~~~~~~~" });
                    }
                }
            }
        }
        catch (error) {
            console.log(error, "Error in login admin");
            next(error);
        }
    });
    return admin_login;
};
