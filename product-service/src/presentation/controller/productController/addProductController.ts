import { Request, Response, NextFunction } from "express";
import { productAddProducer } from "../../../infrastrucutre/kafka/producers/productAddProducer";

export default (dependencies: any) => {

    const { productUseCases: { addProduct } } = dependencies
    const addproduct = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const add = await addProduct(dependencies).interactor(req.body)
            if (!add) {
                return res.json({ message: "Error in adding product" })
            } else {

                res.json(add)
                productAddProducer(add)
            }

        } catch (error) {
            console.log(error, "error occured in product add controller")
        }
    }
    return addproduct

}