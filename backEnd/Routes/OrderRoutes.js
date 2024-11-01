import { placeOrder } from "../Controllers/OrderController.js";
import express from 'express'
import authMiddleware from '../Middleware/auth.js'

const orderRouter=express.Router();
orderRouter.post("/place",authMiddleware,placeOrder)

export default orderRouter;