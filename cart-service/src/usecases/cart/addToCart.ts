export default (dependencies: any) => {
    const { cart_repo: { addToCart_repo } } = dependencies

    if (!addToCart_repo) throw new Error("Dependencies is required")

    const interactor = async (
        credential: {
            userId: String,
            productId: String,
            quantity: number,
        }
    ) => {
        return await addToCart_repo(credential)
    }
    return { interactor }
}