import orderController from './orderListController'
export default (dependencies: any) => {
    return {
        orderListController: orderController(dependencies)
    }
}