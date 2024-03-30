export default (dependencies: any) => {
    const { cart_repo: { removeFromCart_repo } } = dependencies

    if (!removeFromCart_repo) throw new Error("Dependencies are required")

    const interactor = async (
        Credential: {
            productId: String
        }
    ) => {
        return await removeFromCart_repo(Credential)
    }
    return { interactor }
}