import { CurrencyCodes } from "validator/lib/isISO4217.js";
import orderModel from "../Models/OrderModel.js";
import userModel from "../Models/UserModel.js";
import { Stripe } from 'stripe'

const stripe=new Stripe("TYPE_YOUR_STRIPE_PRIVATE_LINK_HERE")

// placing user order for frontend
const  placeOrder=async(req,res)=>{
    const frontendurl="http://localhost:3001"
    try{
        const newOrder=new orderModel({
            userId: req.body.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address
        })
        await newOrder.save();
        await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}})
        const line_items=req.body.items.map((item)=>({
            price_data:{
                currency:"inr",
                product_data:{
                    name:item.name
                },
                unit_amount:item.price*100
            },
            quantity:item.quantity
        }))
        line_items.push({
            price_data:{
                currency:"inr",
                product_data:{
                    name:"Delivery Charges"
                },
                unit_amount:20*100
            },
            quantity: 1
        })
        const session=await stripe.checkout.sessions.create({
            line_items:line_items,
            mode:'payment',
            success_url:`${frontendurl}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url:`${frontendurl}/verify?success=false&orderId=${newOrder._id}`
        })
        res.json({success: true,session_url:session.url})
    }catch(error){
        console.log("Error: "+ error)
        res.json({success: false,error:"Error message from order"})
    }
}
export {placeOrder}
