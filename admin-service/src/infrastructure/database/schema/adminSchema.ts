import mongoose, { Schema } from 'mongoose'
import {IAdmin} from '../../../entity/adminEntity'

const adminSchema: Schema = new Schema({

    email: { type: String },
    password: { type: String },
    role: { type: String }

})

const Admin = mongoose.model<IAdmin>('Admin', adminSchema)
export default Admin
