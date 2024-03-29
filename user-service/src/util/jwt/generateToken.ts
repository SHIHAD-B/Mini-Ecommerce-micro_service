import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../../config/envConfig/env'
interface IProps {
    _id: string,
    role: string,
    Isblocked: boolean

}
export default (payload: IProps) => {
    return jwt.sign(payload, String(JWT_SECRET), { expiresIn: 60 * 60 * 24 })
}