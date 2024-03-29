import mongoose, { Schema, Types } from "mongoose";
const { ObjectId } = Types
import { IProduct } from "../../../entity/productEntity";

const productSchema: Schema = new Schema({
    name: { type: String },
    stock: { type: Number },
    description: { type: String },
    price: { type: Number }

})

const Product = mongoose.model<IProduct>('Product', productSchema)
export default Product;