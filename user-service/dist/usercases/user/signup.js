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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (dependencies) => {
    console.log("reached the use case");
    const { userRepo: { userSignUp_repo } } = dependencies;
    if (!userSignUp_repo) {
        throw new Error("Dependency is required~~~~~~~~~~~~~~~~~");
    }
    const interactor = (credentials) => __awaiter(void 0, void 0, void 0, function* () {
        return yield userSignUp_repo(credentials);
    });
    return { interactor };
};
