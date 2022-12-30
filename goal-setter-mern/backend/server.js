const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const { errorHandler } = require('./middleware/errorMiddleware')
const goalsRoutes = require('./routes/goalRoutes')
const userRoutes = require('./routes/userRoutes')
const colors = require('colors')
const connectDB = require('./config/db')

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', goalsRoutes)
app.use('/api/users', userRoutes)

app.use(errorHandler)

app.listen(port, () => console.log(`Server Started On ${port}`))
