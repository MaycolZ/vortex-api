import express from "express"
import controller from "./../controllers/bookController.js"
const router = express.Router()

router.get("/", controller.getBooks)
router.get("/:id", controller.getBook)

export default router