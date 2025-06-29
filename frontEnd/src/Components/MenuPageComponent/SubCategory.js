import { StoreContext } from "../../StoreContextComponent/storeContext.js";
import FoodCard from "../FoodCardComponent/FoodCard.js";
import './SubCategory.css';
import React, { useContext } from 'react';

const SubCategory = ({ category, setCategory }) => {
  const { flist } = useContext(StoreContext);

  console.log("flist:", flist);
  console.log("category:", category);

  const filteredItems = flist.filter(item => {
    console.log("Filtering item:", item);
    return category === "all" || item.category?.toLowerCase() === category.toLowerCase();
;
  });

  return (
    <div className="foodDisplay">
      <div className="foodList">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <FoodCard
              key={index}
              id={item._id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))
        ) : (
          <p>No items found for this category.</p>
        )}
      </div>
    </div>
  );
};

export default SubCategory;