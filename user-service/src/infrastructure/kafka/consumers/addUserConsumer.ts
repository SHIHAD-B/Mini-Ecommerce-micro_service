import User from '../../database/schema/userSchema'
import { IUser } from '../../../entities/user.entity'

export default async (data: IUser) => {
    try {
        console.log("message reached")
        const newuser = new User({ ...data })
        await newuser.save()

    } catch (error: any) {
        throw new Error(error)
    }
}