import { Router } from 'express'

import upload from '../multer/image'

import { AuthRegisterUserController } from '../controllers/AuthRegisterUserController'

const router = Router()

router.get('/', AuthRegisterUserController.init)
router.post(
    '/auth/register/user',
    upload.single('image'),
    AuthRegisterUserController.registerUser
)

export default router
