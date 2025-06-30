import express from 'express'
import cors from 'cors'
import connectDB from './Config/dbConn.js'
import userRouter from './Routes/UserRoutes.js'
import cartRouter from './Routes/CartRoutes.js'
import foodRouter from './Routes/FoodItemRoutes.js'
import orderRouter from './Routes/OrderRoutes.js'
import reviewsRouter from './Routes/ReviewRoutes.js'

const app = express()
const port = process.env.PORT || 3000

// Middleware
app.use(express.json())
app.use(cors({
    origin: "https://fooodcourttt.vercel.app",
    credentials: true
}))

// Connect Database 
connectDB()

// API routes
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/food", foodRouter)
app.use("/api/order", orderRouter)
app.use('/api/reviews', reviewsRouter);

app.get("/",(req,res)=>{
    res.send("API is working")
})

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})
