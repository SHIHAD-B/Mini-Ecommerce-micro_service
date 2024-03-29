import { Document, ObjectId } from "mongoose"

export interface IProduct extends Document {
    _id?: ObjectId,
    name: string,
    stock: number,
    description: string,
    price: number
}