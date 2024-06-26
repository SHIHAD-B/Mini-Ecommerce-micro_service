import { connect } from "./config/database/dbConnection";
import server from './server'

(async () => {
    try {
        server;
        await connect()
            .catch((error: any) => {
                console.log(error)
                process.exit()
            })
    } catch (error: any) {
        console.log(error)
    }
})()