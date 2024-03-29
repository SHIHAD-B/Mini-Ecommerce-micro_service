export default (dependencies: any) => {
    const { adminrepo: { userExistCheck_repo } } = dependencies
    if (!userExistCheck_repo) throw new Error("dependencies is required")

    const interactor = async (
        credential: {
            email: String
        }
    ) => {
        return await userExistCheck_repo(credential)
    }
    return {interactor}
}