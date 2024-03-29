import mongoose from "mongoose";
import { DB_URL } from "../envConfig/env";

export const connect = async () => {
    try {
        mongoose.connect(String(DB_URL))
        console.log(`order service is connected to the data base`)
    } catch (error) {
        console.log(error, "Error in connecting order service in database")
    }
}


