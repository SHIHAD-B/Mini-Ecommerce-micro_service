import { Document, ObjectId } from "mongoose";

export interface ICart extends Document {
    userId:ObjectId,
    productId: string,
    quantity: number,
    price: number
}