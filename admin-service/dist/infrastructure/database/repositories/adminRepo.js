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
exports.userExistCheck_repo = exports.addAdmin_repo = exports.addProduct_repo = exports.addUser_repo = exports.adminLogin_repo = void 0;
const userSchema_1 = __importDefault(require("../schema/userSchema"));
const productSchema_1 = __importDefault(require("../schema/productSchema"));
const adminSchema_1 = __importDefault(require("../schema/adminSchema"));
//admin login
const adminLogin_repo = (credential) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("reached admin login repo");
        const admin = yield adminSchema_1.default.findOne({ email: credential.email });
        if (admin)
            return admin;
        else
            return false;
    }
    catch (error) {
        console.log(error, "error in login the admin");
        return false;
    }
});
exports.adminLogin_repo = adminLogin_repo;
//add user
const addUser_repo = (Credential) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("reached repo");
        const newUser = yield userSchema_1.default.create(Object.assign({}, Credential));
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
exports.addUser_repo = addUser_repo;
//add product
const addProduct_repo = (Credential) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('reached add product repo');
        const product = yield productSchema_1.default.create(Object.assign({}, Credential));
        if (product)
            return product;
        else
            throw new Error("Error occured in adding the product");
    }
    catch (error) {
        console.log(error, "error in adding product in repo");
        return false;
    }
});
exports.addProduct_repo = addProduct_repo;
//add admin
const addAdmin_repo = (Credential) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("reached add admin repo");
        const newAdmin = yield adminSchema_1.default.create(Object.assign({}, Credential));
        if (newAdmin)
            return newAdmin;
        else
            throw new Error("Error in adding new admin in admin repo");
    }
    catch (error) {
        console.log(error, 'error in add admin repo');
        throw false;
    }
});
exports.addAdmin_repo = addAdmin_repo;
//checking the user exists
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
