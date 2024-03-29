import express, { Application, Request, Response, NextFunction } from "express"
import cookieParser from "cookie-parser"
import cors from 'cors'
import userRoutes from "./infrastructure/routes/user.routes"
import { PORT } from "./config/envConfig/env"


const app: Application = express()
const port: number = Number(PORT) || 4001

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.use(userRoutes)

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
    console.log('user service is running')
})
export default app
