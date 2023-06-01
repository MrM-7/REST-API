// packages
import express from 'express'
import dotenv from 'dotenv'

// routes
import productsRoute from './routes/products.js'

// db
import { connectDB } from './database/connect.js'

// express app
const app = express()

// dotenv config
dotenv.config()

// port
const PORT = process.env.PORT || 5000

app.get('/', () => {
    res.send("Rest API is live")
})

// middleware
app.use("/api/products", productsRoute)


const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URI).then(() => console.log('Database Connected'))
        app.listen(PORT, () => {
            console.log(`Server started listening on Port ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()