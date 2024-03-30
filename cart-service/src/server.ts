import express,{Application,Request,Response,NextFunction} from 'express'
import { PORT } from './config'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import CartRoute from './infrastructure/routes/cart.routes'
import { dependencies } from './config'

const app: Application = express()
const port: number = Number(PORT) || 4002

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.use(CartRoute(dependencies))

app.use((
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.error(err)
    const errorResponse = {
        errors: [{ message: "something went wrong" }]
    }
    return res.status(500).json(errorResponse)
})

app.use(cors())

app.listen(port, () => {
    console.log('cart service is running at '+port)
})
export default app