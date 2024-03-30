export default (dependencies:any)=>{
    const {cart_repo:{cartList_repo}}=dependencies

    if(!cartList_repo)throw new Error("dependencies is required")

    const interactor=async(
        Credential:{
            id:String
        }
    )=>{
        return await cartList_repo(Credential)
    }
    return {interactor}
}