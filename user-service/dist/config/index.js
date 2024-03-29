"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = exports.DB_URL = void 0;
const env_1 = require("./envConfig/env");
Object.defineProperty(exports, "DB_URL", { enumerable: true, get: function () { return env_1.DB_URL; } });
const dbConnection_1 = require("./database/dbConnection");
Object.defineProperty(exports, "connect", { enumerable: true, get: function () { return dbConnection_1.connect; } });
