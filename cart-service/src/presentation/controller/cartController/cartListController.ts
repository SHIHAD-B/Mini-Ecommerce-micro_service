import { Request, Response, NextFunction } from "express";

export default (dependencies: any) => {
    const { CartUseCase: { cartListUseCase } } = dependencies
    const cartList = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { id } = req.body
            if (!id || id.trim("") == "") {
                res.json({ message: "please enter the required field: id" })
            } else {
                const list = await cartListUseCase(dependencies).interactor(req.body)
                if (!list) res.json({ message: "issue in listin cart in controler" })
                else res.json(list)
            }
        } catch (error) {
            console.log(error, "Error occured in cart list controller")
            next(error)
        }
    }
    return cartList
}