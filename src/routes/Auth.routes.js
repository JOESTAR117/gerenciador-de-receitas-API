import { Router } from 'express'
import login from '../controllers/Auth.controller'

const router = Router()

router.post('/auth', login)

export default router