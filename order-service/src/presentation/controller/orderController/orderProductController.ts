import { Request, Response, NextFunction } from "express";

export default (dependecies: any) => {
    const { orderUseCases: { orderProduct } } = dependecies

    const order_product = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const order = await orderProduct(dependecies).interactor(req.body)
            if (!order) {
                res.json({ message: "something went wrong in ordering product in order product controller" })
            } else {
                res.json({ message: "order placed successfully" })
            }

        } catch (error) {
            console.log(error, "Error occured in order product controller")
        }
    }
    return order_product
}