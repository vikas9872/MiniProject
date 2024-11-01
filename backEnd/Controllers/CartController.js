import userModel from '../Models/UserModel.js'

// add items to cart
const addToCart=async(req,res)=>{
    try{
        let userData= await userModel.findById(req.body.userId)
        let cartData=await userData.cartData;
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId]=1;
        }
        else{
            cartData[req.body.itemId]+=1
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData})
        res.json({success: true,message: "Added to cart"})
    }catch(error){
        console.log("Error: "+error)
        res.json({success: false,message:"Error in add to cart"})
    }
}

// remove items from cart
const removeFromCart=async(req,res)=>{
    try{
        let userData = await userModel.findById(req.body.userId)
        let cartData = await userData.cartData;
        if(cartData[req.body.itemId]>0){
            cartData[req.body.itemId]-=1
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({success:true,message:"Removed from cart"})
    }
    catch(error){
        console.log("Error: "+error)
        res.json({success: false,message:"Error in remove to cart"})
    }
}

// fetch cart data
const getCart = async(req,res)=>{
    try{
        let userData = await userModel.findById(req.body.userId)
        if (!userData) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        let cartData = await userData.cartData;
        res.json({success:true, cartData})
    }
    catch(error){
        console.log("Error: "+error)
        res.json({success: false,message:"Error in getting cart items"})
    }
}
export{addToCart,removeFromCart,getCart}