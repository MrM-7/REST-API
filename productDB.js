import { connectDB } from "./database/connect.js"
import Product from "./model/productModel.js"
import dotenv from 'dotenv'
dotenv.config()

// json data
import ProductJson from './products.json' assert { type: 'json' }


const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URI)
        await Product.deleteMany()
        await Product.create(ProductJson)
        console.log("success")
    } catch (error) {
        console.log(error);
    }   
}

start()