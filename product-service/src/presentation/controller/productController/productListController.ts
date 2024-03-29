import { Request, Response, NextFunction } from 'express'

export default (dependencies: any) => {


    const { productUseCases: { productList } } = dependencies

    const productlist = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const products = await productList(dependencies).interactor()
            if (products) {
                res.json(products)
            } else {
                res.json({ message: "something went wrong in fetching product" })
            }


        } catch (error) {
            console.log(error, "error occured in product list controller")

        }
    }
    return productlist
}