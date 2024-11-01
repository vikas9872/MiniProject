import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { StoreContext } from "../../StoreContextComponent/storeContext";
import './FoodDetailpage.css';
import FoodDetailcard from './FoodDetailcard';

const FoodDetailsPage = () => {
  const { id } = useParams();
  const { flist } = useContext(StoreContext);

  const food = flist.find(item => item._id.toString() === id.toString());
  if (!food) {
    return <h2>Food not found</h2>;
  }
  
  return (
    <div className="detailDisplay">
      <FoodDetailcard
        name={food.name}
        price={food.price}
        image={food.image}  
        description={food.description}
        productId={food._id} 
        restaurant={food.restaurant}
      />
    </div>
  );
}
export default FoodDetailsPage;

