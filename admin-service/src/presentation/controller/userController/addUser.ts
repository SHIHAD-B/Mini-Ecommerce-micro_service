import { Request, Response, NextFunction } from 'express'
import bcrypt from 'bcrypt'

export default (dependencies: any) => {
    const { adminUseCases: { addUser,userExistCheck } } = dependencies
    const addusers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const credential=req.body
        if (!credential.name || !credential.email || !credential.password || credential.name.trim("") == "" || credential.email.trim("") == "" || credential.password.trim("") == "") {
            res.json({ message: "enter the required fiels : name,email,password" })
        } else {
            const exist= await userExistCheck(dependencies).interactor(credential.email)
            if(exist){
                res.json({message:"email already exists"})
            }else{
                const saltRounds = 10;
            const salt = await bcrypt.genSalt(saltRounds);

            const hashedPassword: string | null = await bcrypt.hash(credential.password, salt);
            credential.password = hashedPassword
            
            const admin = await addUser(dependencies).interactor(credential)
            if (!admin) {
                res.json({ message: "error in adding user" })
            } else {
                res.json({ message: "user added successfully~~~~~~~~~~~~~~~~" })
            }
            }
        }

    }
    return addusers
}