import express from 'express'
import cors from 'cors'
import connectDB from './Config/dbConn.js'
import userRouter from './Routes/UserRoutes.js'
import cartRouter from './Routes/CartRoutes.js'
import foodRouter from './Routes/FoodItemRoutes.js'
import orderRouter from './Routes/OrderRoutes.js'
import reviewsRouter from './Routes/ReviewRoutes.js'
import path from 'path';
import { fileURLToPath } from 'url';

// Setup for ES Module __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()
const port = process.env.PORT || 3000

// Middleware
app.use(express.json())
app.use(cors({
    origin: "https://foodcourttt.onrender.com/",
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

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '../frontEnd/build')))

// Catch-all handler to serve React's index.html for any non-API routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontEnd/build/index.html'));
});

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`)
})
