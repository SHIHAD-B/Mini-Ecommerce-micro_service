import mongoose, { Schema } from 'mongoose'
import { IProduct } from '../../../entities/productEntities'

const productSchema: Schema = new Schema({
    name: { type: String },
    stock: { type: Number },
    description: { type: String },
    price: { type: Number }
})

export const Products = mongoose.model<IProduct>("Products", productSchema)