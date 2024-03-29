import productlist from "./productListController";
import addProductController from "./addProductController";

export default (dependencies: any) => {
    return {
        productList: productlist(dependencies),
        addproduct: addProductController(dependencies)
    }
}