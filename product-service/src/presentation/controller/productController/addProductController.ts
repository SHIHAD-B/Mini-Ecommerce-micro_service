import { Request, Response, NextFunction } from "express";
import { productAddProducer } from "../../../infrastrucutre/kafka/producers/productAddProducer";

export default (dependencies: any) => {

    const { productUseCases: { addProduct } } = dependencies
    const addproduct = async (req: Request, res: Response, next: NextFunction) => {
        try {
    
            const { name, stock, description, price } = req.body
            if (!name || name.trim("") == "" || !stock || stock < 0 || !description || description.trim("") == "" || !price || price < 0) {
                res.json({ message: "please enter the data correctly : name,stock,description,price" })
            } else {
                const product = await addProduct(dependencies).interactor(req.body)
                if (!product) {
                    res.json({ message: "issue in adding product" })
                } else {
                    res.json({ message: "product added successfully" })
                    productAddProducer(product)
                }
            }

        } catch (error) {
            console.log(error, "error occured in product add controller")
            next(error)
        }
    }
    return addproduct

}