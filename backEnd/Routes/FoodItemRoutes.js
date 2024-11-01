import express from 'express'
import { foodList } from '../Controllers/FoodItemController.js';
const foodRouter=express.Router();
foodRouter.get("/list",foodList)
export default foodRouter;