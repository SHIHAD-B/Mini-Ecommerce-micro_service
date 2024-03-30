import { IProduct } from '../../../entity/productEntity'
import { IUser } from '../../../entity/userEntity'
import { ICart } from '../../../entity/cartEntity'
import { ObjectId } from "mongoose";
import Products from '../schema/productSchema'
import Users from '../schema/userSchema'
import Cart from '../schema/cartSchema'

interface ICartAdd {
    userId: ObjectId,
    productId: String,
    quantity: number,

}

export const addToCart_repo = async (credential: ICartAdd): Promise<ICart | boolean> => {
    try {
        console.log("reached cart  repo")

        const product = await Products.findOne({ _id: credential.productId })
        if (!product) {
            return false
        } else {
            const addedCart = await Cart.create({
                userId: credential.userId,
                productId: product._id,
                quantity: credential.quantity,
                price: credential.quantity * product.price
            })
            if (addedCart) return addedCart
            else return false
        }

    } catch (error) {
        console.error("Error in  product adding to cart", error)
        return false
    }
}


export const cartList_repo = async (Credential: any): Promise<ICart[] | boolean> => {
    try {

        const cartlist = await Cart.find({ userId: Credential.id })
        if (cartlist) return cartlist
        else return false

    } catch (error) {
        console.error("Error in listing cart", error)
        return false
    }
}

export const removeFromCart_repo = async (Credential: any): Promise<boolean> => {
    try {
        const product = await Cart.deleteOne({ productId: Credential.productId })
        if (product) return true
        else return false

    } catch (error) {
        console.error("Error in removing product from cart", error)
        return false
    }
}