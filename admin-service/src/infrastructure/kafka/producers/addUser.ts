import { producer } from "..";
import { ObjectId } from "mongoose"

export const addUsertoKaf = async (
    data: {
        _id?: ObjectId,
        name?: string,
        email?: string,
        password?: string,
        role?: string,
        Isblocked:Boolean ;
    }
) => {
    try {

        await producer.connect()
        const message = {
            topic: 'to-user-service',
            messages: [{
                key: 'adduser',
                value: JSON.stringify(data)
            }]
        };

        await producer.send(message)

    } catch (error: any) {
        console.log(error, "Error occured in admin kafka producer")
    } finally {
        await producer.disconnect()
    }
}