export default (dependencies: any) => {
    const { adminrepo: { addUser_repo } } = dependencies
    if (!addUser_repo) throw new Error("dependecies is required")

    const interactor = async (
        credential: {
            name: String,
            email: String,
            password: String
        }
    ) => {
        return await addUser_repo(credential)
    }
    return {interactor}
}