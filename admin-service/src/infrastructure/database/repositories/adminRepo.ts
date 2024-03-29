import { IProduct } from '../../../entity/productEntity'
import { IAdmin } from '../../../entity/adminEntity'
import { IUser } from '../../../entity/userEntity'

import User from '../schema/userSchema'
import Product from '../schema/productSchema'
import Admin from '../schema/adminSchema'


//admin login
export const adminLogin_repo = async (credential: IAdmin): Promise<IAdmin | boolean> => {
    try {
        console.log("reached admin login repo")
        const admin = await Admin.findOne({ email: credential.email })
        
        if (admin) return admin
        else return false

    } catch (error) {
        console.log(error, "error in login the admin")
        return false
    }
}


//add user
export const addUser_repo = async (Credential: IUser): Promise<IUser | boolean> => {
    try {
        console.log("reached repo")
        const newUser = await User.create({ ...Credential })
        if (newUser) return newUser;
        else throw new Error("error in signing the user")
    } catch (error: any) {
        console.log(`Error occurred in adding the user ${error}`);
        throw false;
    }
}


//add product
export const addProduct_repo = async (Credential: IProduct): Promise<IProduct | boolean> => {
    try {
        console.log('reached add product repo')
        const product = await Product.create({ ...Credential })
        if (product) return product
        else throw new Error("Error occured in adding the product")
    } catch (error) {
        console.log(error, "error in adding product in repo")
        return false
    }

}

//add admin
export const addAdmin_repo = async (Credential: IAdmin): Promise<IAdmin | boolean> => {
    try {

        console.log("reached add admin repo")
        const newAdmin = await Admin.create({ ...Credential })
        if (newAdmin) return newAdmin
        else throw new Error("Error in adding new admin in admin repo")
    } catch (error) {
        console.log(error, 'error in add admin repo')
        throw false
    }
}

//checking the user exists
export const userExistCheck_repo = async (Credential:IUser):Promise <boolean>=>{
    try {
        const userExist =await User.findOne({email:Credential.email})
        if(userExist) return true
        return false
    } catch (error) {
      console.log(error)
      return false
    }
  }