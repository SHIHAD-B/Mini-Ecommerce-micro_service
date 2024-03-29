import { Document, ObjectId } from "mongoose";

export interface ICartItem {
    productId: string,
    productName: string,
    quantity: number,
    price: number
}

export interface IUser extends Document {
    _id?: ObjectId,
    name?: string,
    email?: string,
    password?: string,
    role?: string,
    Isblocked:Boolean ;
    cart?: ICartItem[]
}