import { Router } from 'express'
import {
    createRevenue,
    findAllRevenue,
} from '../controllers/Revenues.controller'
import authMiddleware from '../middlewares/Auth.middlewares'

const router = Router()

router.post('/revenues', authMiddleware, createRevenue)
router.get('/revenues/:id', authMiddleware, findAllRevenue)

export default router
