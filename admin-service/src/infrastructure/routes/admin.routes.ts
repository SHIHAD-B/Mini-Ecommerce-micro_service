import { Router, } from 'express'
import adminController from '../../presentation/controller/adminController'
import userController from '../../presentation/controller/userController'
import productController from '../../presentation/controller/productController'

const adminRoutes = (dependencies: any) => {
    console.log("reached admin routes")

    const router: Router = Router();

    const { addAdminController, adminLoginController } = adminController(dependencies)
    const { addusers } = userController(dependencies)
    const { addproducts } = productController(dependencies)

    router.route('/login').post(adminLoginController)
    router.route('/addAdmin').post(addAdminController)
    router.route('/adduser').post(addusers)
    router.route('/addproduct').post(addproducts)
    return router
}


export default adminRoutes