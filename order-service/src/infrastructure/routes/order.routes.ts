import { Router } from "express"
import { orderController } from "../../presentation/controller";

const orderRouter = (dependencies: any) => {

    const router: Router = Router()

    const { orderListController } = orderController(dependencies)

    router.route('/orderlist').get(orderListController)
    return router
}
export default orderRouter


