import { consumer } from '.'
import { createSubscribe } from './subscribe'

export const runConsumer = async () => {
    try {
        await consumer.connect()

        await consumer.subscribe({
            topic: "to-user-service",
            fromBeginning: true
        })

        const subscriber: any = createSubscribe()
        await consumer.run({
            eachMessage: async ({ message }) => {
                const { key, value } = message
                console.log("🚀🚀🚀🚀🚀🚀🚀", key, '🚀🚀🚀🚀🚀🚀🚀')
                const subscriberMethod = String(key)
                const subscriberData = JSON.parse(String(value))

                try {
                    await subscriber[subscriberMethod](subscriberData)

                } catch (error: any) {
                    throw new Error(error)
                }
            }
        })

    } catch (error: any) {
        throw new Error(error)

    }
}
export const stopConsumer = async () => {
    await consumer.stop()
    await consumer.disconnect()
}