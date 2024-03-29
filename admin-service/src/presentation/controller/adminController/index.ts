import admin_login from './adminLogin'
import addadmin from './addAdmin'
export default (dependencies: any) => {
    return {
        adminLoginController: admin_login(dependencies),
        addAdminController: addadmin(dependencies)
    }
}