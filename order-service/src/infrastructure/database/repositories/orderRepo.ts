import { IOrder } from '../../../entities/orderEntity'
import { Orders } from '../schema/orderSchema'
import Product from '../schema/productSchema'


export const orderList_repo = async (credential:any): Promise<IOrder | boolean> => {
    try {
        console.log('reached order list repo')

        const orders= await Orders.findOne({userId:credential.userId});
        if (orders) return orders
        else return false

    } catch (error) {
        console.error("error occured in order list repo")
        return false
    }
}

export const orderProduct_repo = async (credential: IOrder): Promise<IOrder | boolean> => {
    try {
        console.log("reached order product repo")
        const product=await Product.findOne({_id:credential.productId})
        if(!product){
            return false
        }else{

            credential.orderDate=new Date()
            credential.total=product.price*credential.quantity
            const order = await Orders.create({ ...credential })
            if (order) return order
            else return false
        }
    } catch (error) {
        console.log(error, "Error occured in order product repo")
        return false
    }
}