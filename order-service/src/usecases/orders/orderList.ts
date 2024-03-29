export default (dependencies: any) => {
    const { order_repo: { orderList_repo } } = dependencies

    if (!dependencies) throw new Error("dependencies are required")

    const interactor = async () => {
        return await orderList_repo()
    }
    return { interactor }
}