import mongoose, { Schema } from "mongoose";
const { ObjectId } = mongoose.Schema.Types;
import { ICart } from "../../../entity/cartEntity";

const UsersSchema: Schema = new Schema({
    userId:{type:ObjectId},
    productId: {type:String},
    quantity: {type:Number},
    price: {type:Number}
});

const Cart = mongoose.model<ICart>('Cart', UsersSchema);

export default Cart;