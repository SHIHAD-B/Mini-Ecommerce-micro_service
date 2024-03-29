export default (dependencies: any) => {
    console.log("reached the use case")
    const { userRepo: { userSignUp_repo } } = dependencies
    if (!userSignUp_repo) {
        throw new Error("Dependency is required~~~~~~~~~~~~~~~~~")
    }


    const interactor = async (
        credentials: {
            name: string,
            email: string,
            password?: string
        }
    ) => {
        return await userSignUp_repo(credentials)
    }
    return { interactor }
}