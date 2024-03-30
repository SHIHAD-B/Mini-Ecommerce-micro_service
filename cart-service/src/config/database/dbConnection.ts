import mongoose from 'mongoose'
import { DB_URL } from '../envConfig/env'

export const connect = async () => {
    try {
        mongoose.connect(String(DB_URL))
        console.log('cart service is connected to database')
    } catch (error) {
        console.log(error, 'Error occured in conncting cart service to database')
    }
}