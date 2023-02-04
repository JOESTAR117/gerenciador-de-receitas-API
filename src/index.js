import express from 'express'
import dotenv from 'dotenv'
import connectDatabase from './database/db'

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

connectDatabase()
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!!!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
