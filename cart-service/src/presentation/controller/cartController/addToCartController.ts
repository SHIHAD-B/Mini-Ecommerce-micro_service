import { Request, Response, NextFunction } from 'express'



export default (dependencies: any) => {


    const { CartUseCase: { addToCartUseCase } } = dependencies
    const addToCart = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {

            const { userId, productId, quantity } = req.body
            if (!userId || userId.trim("") == "" || !productId || productId.trim("") == "" || !quantity || quantity < 0) {
                res.json({ message: "please enter the data correctly :userId productId quantity" })
            } else {
                const cartProduct = await addToCartUseCase(dependencies).interactor(req.body)
                if (!cartProduct) res.json({ message: "issue in adding product to cart" })
                else res.json({ message: "product added to cart sucessfully" })
            }

        } catch (error) {
            console.log(error, "Error occured in adding to cart controller")
            next(error)
        }
    }
    return addToCart
}