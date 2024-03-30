
import { connect } from "./config/database";
import server from "./server"
import { runConsumer } from "./infrastructure/kafka/consumer";
import { stopConsumer } from "./infrastructure/kafka/consumer";

(async () => {
    try {
        server;
        await connect()
            .catch((error: any) => {
                console.log(error)
                process.exit()
            })
        await runConsumer()
            .then(() => console.log("kafka consumer is runnning"))
            .catch((error: any) => {
                console.log(error.message, "Error while running kafka comsumer")
                process.exit()
            })


    } catch (error: any) {
        console.log(error)
    } finally {
        process.on("SIGINT", async () => {
            console.log("server is shutting down")
            await stopConsumer()
                .then(() => {
                    console.log("kafka is stopped")
                }).catch((error: any) => {
                    console.log(error, "Error is occured in stoping the kafka")
                })
            process.exit()
        })
    }
})()
