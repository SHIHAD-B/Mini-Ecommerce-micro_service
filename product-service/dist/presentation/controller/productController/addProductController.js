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
const productAddProducer_1 = require("../../../infrastrucutre/kafka/producers/productAddProducer");
exports.default = (dependencies) => {
    const { productUseCases: { addProduct } } = dependencies;
    const addproduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { name, stock, description, price } = req.body;
            if (!name || name.trim("") == "" || !stock || stock < 0 || !description || description.trim("") == "" || !price || price < 0) {
                res.json({ message: "please enter the data correctly : name,stock,description,price" });
            }
            else {
                const product = yield addProduct(dependencies).interactor(req.body);
                if (!product) {
                    res.json({ message: "issue in adding product" });
                }
                else {
                    res.json({ message: "product added successfully........" });
                    (0, productAddProducer_1.productAddProducer)(product);
                }
            }
        }
        catch (error) {
            console.log(error, "error occured in product add controller");
            next(error);
        }
    });
    return addproduct;
};
