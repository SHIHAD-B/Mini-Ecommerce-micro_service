import { Router} from "express"
import * as dependencies from "../../config/dependencies"
import { userController } from "../../presentation/controller"

const router: Router = Router();

const { loginController, signupController } = userController(dependencies)

router.route("/signup").post(signupController)
router.route("/login").post(loginController)

export default router;