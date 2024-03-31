export default (dependencies: any) => {
    const { order_repo: { orderList_repo } } = dependencies

    if (!dependencies) throw new Error("dependencies are required")

    const interactor = async (
        credential:{
            userId:String
        }
    ) => {
        return await orderList_repo(credential)
    }
    return { interactor }
}