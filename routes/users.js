import express from "express"
import controller from "./../controllers/userController.js"
const router = express.Router()

router.get("/", controller.getUsers)
router.get("/:id", controller.getUser)

export default router