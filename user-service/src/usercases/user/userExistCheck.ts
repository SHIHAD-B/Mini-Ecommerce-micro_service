export default (dependencies: any) => {
    console.log("checking db for exist user")
    const { userRepo: { userExistCheck_repo } } = dependencies
    if (!userExistCheck_repo) {
        throw new Error("Dependency is required~~~~~~~~~~~~~~~~~")
    }


    const interactor = async (
        credentials: {
            name: string,
            email: string,
            password?: string
        }
    ) => {
        return await userExistCheck_repo(credentials)
    }
    return { interactor }
}