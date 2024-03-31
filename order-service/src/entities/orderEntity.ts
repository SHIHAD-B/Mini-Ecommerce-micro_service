import { Document, ObjectId } from "mongoose";

export interface IOrder extends Document {
    _id?: ObjectId,
    orderDate?: Date,
    productId: ObjectId,
    userId: ObjectId,
    quantity: number,
    total?: number

}