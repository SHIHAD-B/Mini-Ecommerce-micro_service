
import { IUser } from "../../../../entities/user.entity";
import UserSchema from "../../schema/userSchema";


export const userSignUp_repo = async (credential: IUser): Promise<IUser | boolean> => {

    try {
        console.log("reached repo")
        const newUser = await UserSchema.create({ ...credential })
        if (newUser) return newUser;
        else throw new Error("error in signing the user")
    } catch (error: any) {
        console.log(`Error occurred in adding the user ${error}`);
        throw false;
    }
}

export const login_repo = async (Credential: IUser): Promise<IUser | boolean> => {
    try {
        const userExist = await UserSchema.findOne({ email: Credential.email });
        if (!userExist) return false
        return userExist
    } catch (error: any) {
        console.log(`Error in login ${error}`);
        return false
    }
}

export const userExistCheck_repo = async (Credential:IUser):Promise <boolean>=>{
  try {
      const userExist =await UserSchema.findOne({email:Credential.email})
      if(userExist) return true
      return false
  } catch (error) {
    console.log(error)
    return false
  }
}

