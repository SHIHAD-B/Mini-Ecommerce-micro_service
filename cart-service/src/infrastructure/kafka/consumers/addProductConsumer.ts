
import Product from '../../database/schema/productSchema'
import { IProduct } from '../../../entity/productEntity'

export default async (data: IProduct) => {
    try {
        console.log("message reached")
        const newProduct = new Product({ ...data })
        await newProduct.save()

    } catch (error: any) {
        throw new Error(error)
    }
}