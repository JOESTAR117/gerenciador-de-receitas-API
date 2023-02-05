import { Router } from 'express'
import createUser from '../controllers/User.controller'

const router = Router()

router.post('/registration', createUser)

export default router
