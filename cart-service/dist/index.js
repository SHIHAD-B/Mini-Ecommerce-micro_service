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
const config_1 = require("./config");
const server_1 = __importDefault(require("./server"));
const consumer_1 = require("./infrastructure/kafka/consumer");
const consumer_2 = require("./infrastructure/kafka/consumer");
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        server_1.default;
        yield (0, config_1.connect)()
            .catch((error) => {
            console.log(error);
            process.exit();
        });
        yield (0, consumer_1.runConsumer)()
            .then(() => console.log("kafka consumer is runnning"))
            .catch((error) => {
            console.log(error.message, "Error while running kafka comsumer");
            process.exit();
        });
    }
    catch (error) {
        console.log(error);
    }
    finally {
        process.on("SIGINT", () => __awaiter(void 0, void 0, void 0, function* () {
            console.log("server is shutting down");
            yield (0, consumer_2.stopConsumer)()
                .then(() => {
                console.log("kafka is stopped");
            }).catch((error) => {
                console.log(error, "Error is occured in stoping the kafka");
            });
            process.exit();
        }));
    }
}))();
