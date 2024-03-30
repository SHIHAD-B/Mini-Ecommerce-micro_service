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
exports.addUsertoKaf = void 0;
const __1 = require("..");
const addUsertoKaf = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield __1.producer.connect();
        const message = {
            topic: 'to-user-service',
            messages: [{
                    key: 'adduser',
                    value: JSON.stringify(data)
                }]
        };
        yield __1.producer.send(message);
    }
    catch (error) {
        console.log(error, "Error occured in admin kafka producer");
    }
    finally {
        yield __1.producer.disconnect();
    }
});
exports.addUsertoKaf = addUsertoKaf;
