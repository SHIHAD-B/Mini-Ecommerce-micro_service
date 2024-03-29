
import Product from '../../database/schema/productSchema'
import { IProduct } from '../../../entities/product.entity'

export default async (data: IProduct) => {
    try {

        const newProduct = new Product({ ...data })
        await newProduct.save()

    } catch (error: any) {
        throw new Error(error)
    }
}