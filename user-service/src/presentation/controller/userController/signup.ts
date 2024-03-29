import { NextFunction, Request, Response } from "express";
import bcrypt from 'bcrypt'
import generateToken from "../../../util/jwt/generateToken";

export default (dependencies: any) => {
    const { userUseCases: { signup, userExistCheck } } = dependencies

    const userSignup = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            console.log("reached the signup controller", req.body)
            const credential = req.body

            //checking db for user already exists
            const userExist = await userExistCheck(dependencies).interactor(credential)
            console.log(userExist)
            if (userExist) {
                res.json({ message: "email already exist ~~~~" })
            }else{

                const saltRounds = 10;
                const salt = await bcrypt.genSalt(saltRounds);
    
                const hashedPassword: string | null = await bcrypt.hash(credential.password, salt);
                credential.password = hashedPassword
                
    
                const user = await signup(dependencies).interactor(credential)
                const token = generateToken({
                    _id: user._id,
                    role: user.role,
                    Isblocked: false
    
                })
                res.cookie("auth", token, {
                    maxAge: 1000 * 60 * 60 * 24,
                    httpOnly: true
                })
                res.json({ message: "user signed in" + " "+ user.email })
            }



        } catch (error) {
            next(error)
        }
    }
    return userSignup
}