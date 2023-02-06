import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDatabase from './database/db'
import router from './routes/Users.routes.js'
import authRouter from './routes/Auth.routes'


dotenv.config()

const port = process.env.PORT || 3000
const app = express()

connectDatabase()
app.use(cors())
app.use(express.json())
app.use(router)
app.use(authRouter)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
