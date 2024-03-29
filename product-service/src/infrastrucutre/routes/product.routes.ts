import { Router } from "express";
import productController from "../../presentation/controller/productController";

const productRoute = (dependencies: any) => {

    const router: Router = Router();
    const { productList, addproduct } = productController(dependencies)


    router.route('/productlist').get(productList)
    router.route('/addproduct').post(addproduct)

    
    return router
}
export default productRoute


