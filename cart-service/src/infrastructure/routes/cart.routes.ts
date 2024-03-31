import { Router } from 'express'
import cartController from '../../presentation/controller/cartController'



const cartRoutes = (dependencies: any) => {
    const router: Router = Router()

    const { removeCart, cartList, addToCart } = cartController(dependencies)

    router.route('/addtocart').post(addToCart)
    router.route('/cartlist').get(cartList)
    router.route('/removecart').post(removeCart)
    return router

}
export default cartRoutes