export default (dependecies: any) => {
    const { order_repo: { orderProduct_repo } } = dependecies
    if (!dependecies) throw new Error("dependencies are required")

    const interactor = async (
        credential: {
            orderDate: Date,
            productId: String,
            userId: String,
            quantity: number,
            total: number
        }
    ) => {
        return await orderProduct_repo(credential)
    }
    return { interactor }
}