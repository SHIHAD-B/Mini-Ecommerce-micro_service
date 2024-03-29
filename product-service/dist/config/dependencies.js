"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.product_repo = exports.productUseCases = void 0;
const repositories_1 = require("../infrastrucutre/database/repositories");
Object.defineProperty(exports, "product_repo", { enumerable: true, get: function () { return repositories_1.product_repo; } });
const usecases_1 = require("../usecases");
Object.defineProperty(exports, "productUseCases", { enumerable: true, get: function () { return usecases_1.productUseCases; } });
