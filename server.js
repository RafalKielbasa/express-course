import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

import products from './routes/products.js'
import logger from './middleware/logger.js'
import errorHandler from './middleware/error.js'
import notFound from './middleware/notFound.js'

const PORT = process.env.PORT || 8000

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

// Serve static files
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

//Body parser
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Logger middleware
app.use(logger)

app.use('/api/products', products)

//General error handler
app.use(notFound)

//Error handler middleware
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`)
})
