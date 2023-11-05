import express from 'express'

import { createUser } from '../controllers/userController.js'

const router = express.Router()

// specifying it is a post method and will go to endpoint /register
// and will call the createUser function from the userController.js
router.post('/register', createUser)

export { router as userRoute }
