import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDatabase from './database/db'
import router from './routes/Users.routes.js'
import authRouter from './routes/Auth.routes'
import revenuesRouter from './routes/Revenues.routes'


dotenv.config()


const app = express()

connectDatabase()
app.use(cors())
app.use(express.json())
app.use(router)
app.use(authRouter)
app.use(revenuesRouter)


export default app;