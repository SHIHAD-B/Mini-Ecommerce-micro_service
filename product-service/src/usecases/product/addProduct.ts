export default (dependencies: any) => {
    const { product_repo: { addProduct_repo } } = dependencies

    if (!addProduct_repo) throw new Error("Dependencies is require ")

    const interactor = async () => {
        return await addProduct_repo(dependencies)
    }
    return {interactor}
}