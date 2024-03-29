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
exports.userExistCheck_repo = exports.login_repo = exports.userSignUp_repo = void 0;
const userSchema_1 = __importDefault(require("../../schema/userSchema"));
const userSignUp_repo = (credential) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("reached repo");
        const newUser = yield userSchema_1.default.create(Object.assign({}, credential));
        if (newUser)
            return newUser;
        else
            throw new Error("error in signing the user");
    }
    catch (error) {
        console.log(`Error occurred in adding the user ${error}`);
        throw false;
    }
});
exports.userSignUp_repo = userSignUp_repo;
const login_repo = (Credential) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userExist = yield userSchema_1.default.findOne({ email: Credential.email });
        if (!userExist)
            return false;
        return userExist;
    }
    catch (error) {
        console.log(`Error in login ${error}`);
        return false;
    }
});
exports.login_repo = login_repo;
const userExistCheck_repo = (Credential) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userExist = yield userSchema_1.default.findOne({ email: Credential.email });
        if (userExist)
            return true;
        return false;
    }
    catch (error) {
        console.log(error);
        return false;
    }
});
exports.userExistCheck_repo = userExistCheck_repo;
