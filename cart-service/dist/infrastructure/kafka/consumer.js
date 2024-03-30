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
exports.stopConsumer = exports.runConsumer = void 0;
const index_1 = require("./index");
const subscribe_1 = require("./subscribe");
const runConsumer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        try {
            yield index_1.consumer.connect();
        }
        catch (error) {
            console.error('Error connecting to Kafka:', error);
            yield new Promise(resolve => setTimeout(resolve, 5000));
            yield index_1.consumer.connect();
        }
        yield index_1.consumer.subscribe({
            topic: "to-user-service",
            fromBeginning: true
        });
        const subscriber = (0, subscribe_1.createSubscribe)();
        yield index_1.consumer.run({
            eachMessage: (_a) => __awaiter(void 0, [_a], void 0, function* ({ message }) {
                const { key, value } = message;
                console.log("🚀🚀🚀🚀🚀🚀🚀", key, '🚀🚀🚀🚀🚀🚀🚀');
                const subscriberMethod = String(key);
                const subscriberData = JSON.parse(String(value));
                try {
                    yield subscriber[subscriberMethod](subscriberData);
                }
                catch (error) {
                    throw new Error(error);
                }
            })
        });
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.runConsumer = runConsumer;
const stopConsumer = () => __awaiter(void 0, void 0, void 0, function* () {
    yield index_1.consumer.stop();
    yield index_1.consumer.disconnect();
});
exports.stopConsumer = stopConsumer;
