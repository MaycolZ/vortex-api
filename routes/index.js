import express from "express"
import userRouter from "./users.js"
import bookRouter from "./books.js"
const router = express.Router()

router.use("/users", userRouter)
router.use("/books", bookRouter)

export default router