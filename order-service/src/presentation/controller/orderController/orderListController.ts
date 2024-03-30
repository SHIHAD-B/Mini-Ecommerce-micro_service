import { Request, Response, NextFunction } from "express";

export default (dependencies: any) => {
    const { orderUseCases: { orderList } } = dependencies

    const order_List = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const orders = await orderList(dependencies).interactor()
            if (orders) {
                res.json(orders)
            } else {
                res.json({ message: "something went wrong in fetching data from orders database" })
            }

        } catch (error) {
            console.log(error, "Error occured in fetching orders from database.....")

        }
    }
    return order_List
}