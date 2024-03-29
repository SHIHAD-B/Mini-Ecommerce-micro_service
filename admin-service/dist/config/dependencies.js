"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminUseCases = exports.adminrepo = void 0;
const repositories_1 = require("../infrastructure/database/repositories");
Object.defineProperty(exports, "adminrepo", { enumerable: true, get: function () { return repositories_1.adminrepo; } });
const usecases_1 = require("../usecases");
Object.defineProperty(exports, "adminUseCases", { enumerable: true, get: function () { return usecases_1.adminUseCases; } });
