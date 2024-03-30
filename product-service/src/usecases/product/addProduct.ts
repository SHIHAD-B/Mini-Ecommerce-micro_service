export default (dependencies: any) => {
    const { product_repo: { addProduct_repo } } = dependencies

    if (!addProduct_repo) throw new Error("Dependencies is require ")

    const interactor = async (
        credential: {
            name: string,
            stock: number,
            description: string,
            price: number
        }
    ) => {
        return await addProduct_repo(credential)
    }
    return {interactor}
}