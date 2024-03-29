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
exports.default = (dependencies) => {
    const { adminUseCases: { addAdmin } } = dependencies;
    const add_admin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            console.log("reached add admin controller");
            const credential = req.body;
            if (!credential.name || !credential.email || !credential.password || credential.name.trim("") == "" || credential.email.trim("") == "" || credential.password.trim("") == "") {
                res.json({ message: "enter the required fiels : name,email,password" });
            }
            else {
                const saltRounds = 10;
                const salt = yield bcrypt_1.default.genSalt(saltRounds);
                const hashedPassword = yield bcrypt_1.default.hash(credential.password, salt);
                credential.password = hashedPassword;
                const admin = yield addAdmin(dependencies).interactor(credential);
                if (!admin) {
                    res.json({ message: "error in adding admin" });
                }
                else {
                    res.json({ message: "admin added successfully~~~~~~~~~~~~~~~~" });
                }
            }
        }
        catch (error) {
            console.log("Error occured in adding admin");
            next(error);
        }
    });
    return add_admin;
};
