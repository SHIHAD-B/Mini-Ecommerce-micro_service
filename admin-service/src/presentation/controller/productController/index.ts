import addproduct from './addProduct'

export default (dependencies: any) => {
    return {
       addproducts: addproduct(dependencies)
    }
}