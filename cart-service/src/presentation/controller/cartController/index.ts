import addToCartController from './addToCartController'
import cartListController from './cartListController'
import removeCartController from './removeCartController'


export default (dependencies: any) => {
    return {
        addToCart: addToCartController(dependencies),
        cartList: cartListController(dependencies),
        removeCart: removeCartController(dependencies)
    }
}