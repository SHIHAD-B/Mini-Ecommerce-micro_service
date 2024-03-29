import { producer } from "..";
import { ObjectId } from "mongoose"

export const productAddProducer = async (
    data: {
        _id?: ObjectId,
        name: string,
        stock: number,
        description: string,
        price: number
    }
) => {
    try {

        await producer.connect()
        const message = {
            topic: 'to-user-service',
            messages: [{
                key: 'addproduct',
                value: JSON.stringify(data)
            }]
        };

        await producer.send(message)

    } catch (error: any) {
        console.log(error, "Error occured in product kafka producer")
    } finally {
        await producer.disconnect()
    }
}