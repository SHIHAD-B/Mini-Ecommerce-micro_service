
import mongoose, { Schema } from "mongoose";
import { IUser } from "../../../entity/userEntity";

const UsersSchema: Schema = new Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String },
    role: { type: String },
    isblocked: { type: Boolean }
});

const Users = mongoose.model<IUser>('Users', UsersSchema);

export default Users;

