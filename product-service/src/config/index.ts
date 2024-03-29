import { DB_URL, PORT } from './envConfig/env'
import { connect } from './database/dbConnection'

export {
    DB_URL,
    PORT,
    connect
}

export * as dependencies from './dependencies'