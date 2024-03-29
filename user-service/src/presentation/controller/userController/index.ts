import userLogin from './login'
import userSignup from "./signup"

export default (dependencies: any) => {
    return {
        signupController: userSignup(dependencies),
        loginController: userLogin(dependencies)
    }
}