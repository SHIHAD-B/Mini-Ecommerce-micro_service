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
const addUser_1 = require("../../../infrastructure/kafka/producers/addUser");
exports.default = (dependencies) => {
    const { adminUseCases: { addUser, userExistCheck } } = dependencies;
    const addusers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const credential = req.body;
        if (!credential.name || !credential.email || !credential.password || credential.name.trim("") == "" || credential.email.trim("") == "" || credential.password.trim("") == "") {
            res.json({ message: "enter the required fiels : name,email,password" });
        }
        else {
            const exist = yield userExistCheck(dependencies).interactor(credential.email);
            if (exist) {
                res.json({ message: "email already exists" });
            }
            else {
                const saltRounds = 10;
                const salt = yield bcrypt_1.default.genSalt(saltRounds);
                const hashedPassword = yield bcrypt_1.default.hash(credential.password, salt);
                credential.password = hashedPassword;
                credential.isblocked = false;
                const admin = yield addUser(dependencies).interactor(credential);
                if (!admin) {
                    res.json({ message: "error in adding user" });
                }
                else {
                    res.json({ message: "user added successfully~~~~~~~~~~~~~~~~" });
                    (0, addUser_1.addUsertoKaf)(admin);
                }
            }
        }
    });
    return addusers;
};
