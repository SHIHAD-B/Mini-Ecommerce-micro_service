export default (dependencies: any) => {
    const { adminrepo: { addAdmin_repo } } = dependencies
    if (!addAdmin_repo) throw new Error("Dependencies is required")

    const interactor = async (
        credential: {

            email: string,
            password: string,
            role: string
        }
    ) => {
        return await addAdmin_repo(credential)
    }
    return {interactor}
}