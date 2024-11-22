import dotenv from "dotenv"
import express from "express"

dotenv.config()

const app = express()

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Hello, World!')
})

app.get('/books', (req, res) => {
    res.send('Aquí estan tus libros!')
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})