
import mongoose, { Schema } from "mongoose";
import { IUser } from "../../../entity/userEntity";

const UsersSchema: Schema = new Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String },
    role: { type: String },
    isblocked: { type: Boolean },
    cart: [{
        price: { type: Number },
        productId: { type: String },
        productName: { type: String },
        quantity: { type: Number },
    }],
});

const Users = mongoose.model<IUser>('Users', UsersSchema);

export default Users;

