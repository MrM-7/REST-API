import express from "express"
import { getAllProducts, getAllProductsTesting } from '../controllers/productController.js'

const router = express.Router()


router.get("/", getAllProducts)

router.get("/testing", getAllProductsTesting)

export default router