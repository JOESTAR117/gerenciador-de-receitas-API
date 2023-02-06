import { Router } from "express";
import createRevenue from "../controllers/Revenues.controller";
import authMiddleware from "../middlewares/Auth.middlewares";

const router = Router()

router.post('/revenues',authMiddleware, createRevenue)


export default router

