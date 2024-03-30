import { compare } from 'bcrypt'
import { NextFunction, Request, Response } from 'express'
import generateToken from '../../../util/jwt/generateToken'


export default (dependencies: any) => {
    const { userUseCases: { login } } = dependencies
    const userLogin = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { email, password } = req.body
            if (!email || email.trim("") == "" || !password || password.trim("") == "") {
                res.json({ message: `please fill out all the rerquired fields: email and password` })
            } else {

                const user = await login(dependencies).interactor(req.body)
                console.log("user controller reached")
                console.log("email" + email)
                console.log("password" + password)
                console.log("user" + user)

                if (!user) throw new Error("user is not found......")

                const match = await compare(password, user.password)
                if (!match) {
                    res.json({message:`incorrect password`})
                    throw new Error("password is incorrect")
                }else{

                    const token = generateToken({
                        _id: user._id,
                        role: user.role,
                        Isblocked: user.isblocked
                    })
    
                    res.cookie("auth", token, {
                        maxAge: 1000 * 60 * 60 * 24,
                        httpOnly: true
                    })
    
                    res.status(201).json({ success: true, data: user, message: "user logged-in~~~~~~~~~~" })
                }

            }


        } catch (error) {
            next(error)
        }
    }
    return userLogin
}