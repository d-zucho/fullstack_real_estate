import asyncHandler from 'express-async-handler'
import { prisma } from '../config/prismaConfig.js'

export const createUser = asyncHandler(async (req, res) => {
  console.log('creating a user...')

  let { email } = req.body

  // check if user already exists
  const userExists = await prisma.user.findUnique({
    where: {
      email: email,
    },
  })

  if (!userExists) {
    // create a user document (new user)
    const user = await prisma.user.create({ data: req.body })
    res.send({
      message: 'User created successfully',
      user: user,
    })
  } else res.status(201).send({ message: 'User already exists' })
})
