import express, { Application, Request, Response, NextFunction } from "express";
import { PORT } from "./config/envConfig/env";
import { dependecies } from "./config";
import cookieParser from "cookie-parser";
import cors from 'cors'
import orderRouter from "./infrastructure/routes/order.routes";

const app: Application = express()
const port: number = Number(PORT) || 4003

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use(orderRouter(dependecies))

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
    console.log('order service is running')
})
export default app