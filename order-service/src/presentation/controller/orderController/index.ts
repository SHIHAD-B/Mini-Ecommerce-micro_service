import orderController from './orderListController'
import orderProduct from './orderProductController'
export default (dependencies: any) => {
    return {
        orderListController: orderController(dependencies),
        orderProductController: orderProduct(dependencies)
    }
}