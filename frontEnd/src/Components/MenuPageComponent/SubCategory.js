import { StoreContext } from "../../StoreContextComponent/storeContext.js";
import FoodCard from "../FoodCardComponent/FoodCard.js";
import './SubCategory.css'
import React, { useContext } from 'react'

const SubCategory = ({ category, setCategory }) => {
  const {flist}=useContext(StoreContext)
  const filteredItems = flist.filter(item => category === "all" || category === item.category);
  return (
    <div className="foodDisplay">
      <div className="foodList">
        {filteredItems.map((item, index) => {
            return (
              <FoodCard
                key={index}
                id={item._id}
                name={item.name}
                price={item.price}
                image={item.image}
              />
            )
        })}
      </div>
    </div>
  )
}
export default SubCategory