import express, { Application, Request, Response, NextFunction } from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import * as dependencies from './config/dependencies'
import adminRoutes from './infrastructure/routes/admin.routes'
import { PORT } from './config/envConfig/env'

const app: Application = express()
const port: number = Number(PORT)

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use(adminRoutes(dependencies))

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



app.listen(port, () => {
    console.log(`Admin service is runnning at ${port}`)
})

export default app