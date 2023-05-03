import express from 'express'
import groupRouter from './group.routes'
import postRouter from './post.routes'
import questionRouter from './question.routes'
import authRouter from './auth.routes'
import userRouter from './user.routes'

const router = express.Router()
router.use('/group', groupRouter)
router.use('/post', postRouter)
router.use('/question', questionRouter)
router.use('/auth', authRouter)
router.use('/user', userRouter)

export default router
