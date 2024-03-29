"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userUseCases = exports.userRepo = void 0;
const repositories_1 = require("../infrastructure/database/repositories");
Object.defineProperty(exports, "userRepo", { enumerable: true, get: function () { return repositories_1.userRepo; } });
const usercases_1 = require("../usercases");
Object.defineProperty(exports, "userUseCases", { enumerable: true, get: function () { return usercases_1.userUseCases; } });
