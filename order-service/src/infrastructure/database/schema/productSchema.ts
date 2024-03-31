import mongoose, { Schema, Types } from "mongoose";
const { ObjectId } = Types
import { IProduct } from "../../../entities/product.entity";

const productSchema: Schema = new Schema({
    _id: { type: ObjectId },
    name: { type: String },
    stock: { type: Number },
    description: { type: String },
    price: { type: Number }

})

const Product = mongoose.model<IProduct>('Product', productSchema)
export default Product;