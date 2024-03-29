export default (dependencies: any) => {
    const { adminrepo: { addProduct_repo } } = dependencies
    if (!addProduct_repo) throw new Error("dependencies is required")

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