import mongoose from 'mongoose'
import { DB_URL } from '../envConfig/env'

export const connect = async () => {
    try {
        mongoose.connect(String(DB_URL))
        console.log(`Admin is connected database 4004`)
        
    } catch (error) {
        console.log(error,'error in the admin database connection')
    }
}