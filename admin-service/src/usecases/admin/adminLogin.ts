export default (dependencies:any)=>{
    const {adminrepo:{adminLogin_repo}} = dependencies
    if(!adminLogin_repo) throw new Error("dependencies is required")

    const interactor= async(
        credentail:{
            email:String,
            password:String
        }
    )=>{
        return await adminLogin_repo(credentail)
    }
    return {interactor}
}