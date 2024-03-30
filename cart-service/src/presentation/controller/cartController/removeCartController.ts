import { Request, Response, NextFunction } from "express";

export default (dependencies: any) => {
    const { CartUseCase: { removeCartUseCase } } = dependencies
    const removeCart = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { productId } = req.body
            if (!productId || productId.trim("") == "") {
                res.json({ message: "please enter the required data : productId" })
            } else {
                const remove = await removeCartUseCase(dependencies).interactor(req.body)
                if (!remove) res.json({ message: "Issue occured in deleting product from cart" })
                else res.json({ message: "Product removed from the cart successfully....." })
            }
        } catch (error) {
            console.log(error, "Error occured in remove cart controller")
            next(error)
        }
    }
    return removeCart
}