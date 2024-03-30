import { IProduct } from "../../../entities/productEntities";
import { Products } from "../schema/productSchema";


export const productList_repo = async (): Promise<IProduct[] | boolean> => {
    try {
        console.log("reached product repo")
        const products = await Products.find();
        if (products) {
            return products;
        } else {
            return false;
        }
    } catch (error) {

        console.error("Error in fetching data from db in repo:", error);
        return false;
    }
}

export const addProduct_repo = async (product: IProduct): Promise<IProduct | boolean> => {
    try {
        const products_ = await Products.create({ ...product })
        if (products_) return products_
        else return false
    } catch (error) {

        console.error("Error in addin product to the database:", error);
        return false;
    }
}

// export const orderProduct_repo = async (productid: IProduct["_id"]): Promise<IProduct | boolean> => {
//     try {
//         console.log("reached order product repo")
//         const product = await Products.findOne({ _id: productid })
//         if (product) return product
//         else return false

//     } catch (error) {
//         console.error("Error in ordering product", error)
//         return false
//     }
// }



