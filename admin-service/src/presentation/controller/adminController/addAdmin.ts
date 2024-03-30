import { Request, Response, NextFunction } from "express";
import bcrypt from 'bcrypt'

export default (dependencies: any) => {
    const { adminUseCases: { addAdmin } } = dependencies

    const add_admin = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            console.log("reached add admin controller.....")
            const credential = req.body
            if (!credential.name || !credential.email || !credential.password || credential.name.trim("") == "" || credential.email.trim("") == "" || credential.password.trim("") == "") {
                res.json({ message: "enter the required fiels : name,email,password" })
            } else {
                const saltRounds = 10;
                const salt = await bcrypt.genSalt(saltRounds);

                const hashedPassword: string | null = await bcrypt.hash(credential.password, salt);
                credential.password = hashedPassword
                
                const admin = await addAdmin(dependencies).interactor(credential)
                if (!admin) {
                    res.json({ message: "error in adding admin" })
                } else {
                    res.json({ message: "admin added successfully~~~~~~~~~~~~~~~~" })
                }
            }

        } catch (error) {
            console.log("Error occured in adding admin")
            next(error)
        }
    }
    return add_admin
}