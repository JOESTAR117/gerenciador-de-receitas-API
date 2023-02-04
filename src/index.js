import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDatabase from './database/db'
import router from './routes/AuthRegisterUser.Routes.js'

dotenv.config()

const app = express()


connectDatabase()
app.use(cors())
app.use(express.json())
app.use(router)

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
