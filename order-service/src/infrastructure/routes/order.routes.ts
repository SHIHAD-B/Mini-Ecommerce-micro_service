import { Router } from "express"
import { orderController } from "../../presentation/controller";

const orderRouter = (dependencies: any) => {

    const router: Router = Router()

    const { orderListController,orderProductController } = orderController(dependencies)

    router.route('/orderlist').get(orderListController)
    router.route('/orderproduct').post(orderProductController)
    return router
}
export default orderRouter


