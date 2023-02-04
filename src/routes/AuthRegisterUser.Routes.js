import { Router } from 'express'
import { AuthRegisterUserController } from '../controllers/AuthRegisterUserController'

const router = Router()

router.get('/', AuthRegisterUserController.init)
router.post('/auth/register/user', AuthRegisterUserController.registerUser)

export default router;
