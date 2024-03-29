export default (dependencies: any) => {
    const { product_repo: { productList_repo } } = dependencies
    if (!productList_repo) throw new Error("dependencies are required")

    const interactor = async () => {
        return await productList_repo()
    }
    return { interactor }
}