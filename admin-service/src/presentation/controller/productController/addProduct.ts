import { Request, Response, NextFunction } from "express";


export default (dependecies: any) => {
    const { adminUseCases: { addProduct } } = dependecies
    const add_Product = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { name, stock, description, price } = req.body
            if (!name || name.trim("") == "" || !stock || stock < 0 || !description || description.trim("") == "" || !price || price < 0) {
                res.json({ message: "please enter the data correctly : name,stock,description,price" })
            } else {
                const product = await addProduct(dependecies).interactor(req.body)
                if (!product) {
                    res.json({ message: "issue in adding product" })
                } else {
                    res.json({ message: "product added successfully" })
                }
            }

        } catch (error) {
            console.log(error, "Error occured in product adding")
            next(error)

        }

    }
    return add_Product
}