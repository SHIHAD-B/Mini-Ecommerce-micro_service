import mongoose from "mongoose"
import { DB_URL } from "../envConfig/env"

export const connect = async () => {
    try {
        mongoose.connect(String(DB_URL))
        console.log("user database is connected")
    } catch (error) {
        console.log(error, "error in the user database connection")
    }
}