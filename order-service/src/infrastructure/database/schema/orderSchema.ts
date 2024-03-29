import mongoose, { Schema } from "mongoose";
const { ObjectId } = mongoose.Schema.Types;

import { IOrder } from '../../../entities/orderEntity'

const orderSchema: Schema = new Schema({
    id: { type: ObjectId },
    orderDate: { type: Date },
    productId: ObjectId,
    userId: ObjectId,
    quantity: { type: Number },
    total: { type: Number }
})

export const Orders = mongoose.model<IOrder>('Orders', orderSchema)