import mongoose from "mongoose";
import { DB_URL } from "../envConfig/env";

export const connect = async () => {
    try {
        mongoose.connect(String(DB_URL))
        console.log("product-service is connected to database")
    } catch (error) {
        console.log(error)
    }
}