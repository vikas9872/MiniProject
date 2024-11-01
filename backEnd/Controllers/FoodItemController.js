import foodModel from "../Models/FoodItemModel.js";
const foodList = async (req, res) => {
    try {
        const foods = await foodModel.find({})
        res.json({ success: true, data: foods })
    } catch (error) {
        console.log("Error in fetching: " + error)
        res.json({ success: false, message: "Error: " })
    }
}
export { foodList }