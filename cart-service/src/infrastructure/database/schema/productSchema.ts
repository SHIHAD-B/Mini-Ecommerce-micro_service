import mongoose, { Schema } from 'mongoose'
import { IProduct } from '../../../entity/productEntity'

const productSchema: Schema = new Schema({
    name: { type: String },
    stock: { type: Number },
    description: { type: String },
    price: { type: Number }
})

const Products = mongoose.model<IProduct>("Products", productSchema)
export default Products