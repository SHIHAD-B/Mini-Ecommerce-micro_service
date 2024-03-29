
import { connect } from "./config";
import server from './server'


(async () => {
    try {
        server;
        await connect()
            .catch((error: any) => {
                console.log(error)
                process.exit()
            })


    } catch (error) {

    }
})()

