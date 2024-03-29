export default (dependencies: any) => {
    const {
        userRepo: { login_repo },
    } = dependencies;

    if (!login_repo) {
        throw new Error("Dependencies is reqired~~~~~~~~~~~~~~~")
    }
    const interactor = async (email: string) => {
        return await login_repo(email)
    }
    return { interactor }
}