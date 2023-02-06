import jwt from 'jsonwebtoken'
import userService from '../services/User.service'
import dotenv from 'dotenv'

dotenv.config()

const authMiddleware = (req, res, next) => {
    try {
        const { authorization } = req.headers

        if (!authorization) {
            return res.sendStatus(401)
        }

        const parts = authorization.split(' ')

        if (parts.length !== 2) {
            return res.sendStatus(401)
        }

        const [schema, token] = parts

        if (schema !== 'Token') {
            return res.sendStatus(401)
        }

        jwt.verify(token, process.env.SECRET_JWT, async (error, decoded) => {
            if (error) {
                return res.status(401).json({ message: 'Token invalid' })
            }
            const user = await userService.findByIdService(decoded.id)

            if (!user || !user.id) {
                return res.status(401).json({ message: 'Invalid token' })
            }
            req.userId = user.id

            next()
        })
    } catch (err) {
        res.status(500).json(err.message)
    }
}

export default authMiddleware;
