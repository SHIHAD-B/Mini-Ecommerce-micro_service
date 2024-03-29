import { IOrder } from '../../../entities/orderEntity'
import { Orders } from '../schema/orderSchema'


export const orderList_repo = async (): Promise<IOrder[] | boolean> => {
    try {
        console.log('reached order list repo')

        const orders: IOrder[] = await Orders.find();
        if (orders) return orders
        else return false

    } catch (error) {
        console.error("error occured in order list repo")
        return false
    }
}