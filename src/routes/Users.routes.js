import { Router } from 'express'
import {
    createUser,
    findAllUsers,
    findById,
} from '../controllers/User.controller'
import { validId, validUser } from '../middlewares/Global.middlewares'

const router = Router()

router.get('/', (req, res) => {
    return res.json({ message: 'Welcome to API' })
})

router.post('/registration', createUser)
router.get('/users', findAllUsers)
router.get('/users/:id', validId, validUser, findById)

export default router
