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
    const { userUseCases: { signup, userExistCheck } } = dependencies;
    const userSignup = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            console.log("reached the signup controller", req.body);
            const credential = req.body;
            //checking db for user already exists
            const userExist = yield userExistCheck(dependencies).interactor(credential);
            console.log(userExist);
            if (userExist) {
                res.json({ message: "email already exist ~~~~" });
            }
            else {
                const saltRounds = 10;
                const salt = yield bcrypt_1.default.genSalt(saltRounds);
                const hashedPassword = yield bcrypt_1.default.hash(credential.password, salt);
                credential.password = hashedPassword;
                const user = yield signup(dependencies).interactor(credential);
                const token = (0, generateToken_1.default)({
                    _id: user._id,
                    role: user.role,
                    Isblocked: false
                });
                res.cookie("auth", token, {
                    maxAge: 1000 * 60 * 60 * 24,
                    httpOnly: true
                });
                res.json({ message: "user signed in" + " " + user.email });
            }
        }
        catch (error) {
            next(error);
        }
    });
    return userSignup;
};
