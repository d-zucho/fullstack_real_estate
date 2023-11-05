import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import { userRoute } from './routes/userRoute.js'
import { residencyRoute } from './routes/residencyRoute.js'

// listen to .env files
dotenv.config()

// initialize application
const app = express()

// specify port
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cookieParser())
// cors() allows requests from any origin
// this way we don't see CORS errors
app.use(cors())

// app.listen() starts the server on a specified port
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
})

app.use('/api/user', userRoute)
app.use('/api/residency', residencyRoute)
