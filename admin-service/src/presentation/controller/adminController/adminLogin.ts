import { Request, Response, NextFunction } from 'express'
import bcrypt from 'bcrypt'
import generateToken from '../../../util/jwt/generateToken'

export default (dependencies: any) => { 
    const { adminUseCases: { adminLogin } } = dependencies
    const admin_login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { email, password } = req.body
            if (!email || email.trim("") == "" || !password || password.trim("") == "") {
                res.json({ message: "please enter the required fields : email and password" })
            } else {
                const admin = await adminLogin(dependencies).interactor({email})
              
                if (!admin) {
                    res.json({ message: "user not found" })
                } else {

                    const match = bcrypt.compare(password, admin.password)
                    if (!match) {
                        res.json({ message: "incorrect password" })
                    } else {
                        const token = generateToken({
                            _id: admin._id,
                            role: admin.role,
                            email: admin.email
                        })

                        res.cookie("adminauth", token, {
                            maxAge: 1000 * 60 * 60 * 24,
                            httpOnly: true
                        })

                        res.json({ message: "Admin logged in successfully~~~~~~~~~~~~~~~~~~~" })
                    }
                }

            }

        } catch (error) {
            console.log(error, "Error in login admin")
            next(error)
        }
    }
    return admin_login
}
