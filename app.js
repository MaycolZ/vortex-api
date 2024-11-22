import dotenv from "dotenv"
import express from "express"
import indexRouter from "./routes/index.js"

dotenv.config()

const app = express()
app.use("/api/v1", indexRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})