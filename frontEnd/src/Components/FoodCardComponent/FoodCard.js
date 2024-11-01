import React, { useContext} from 'react'
import './FoodCard.css'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../StoreContextComponent/storeContext'
const FoodCard = ({ id, name, price, image }) => {
    const {cartItems,addToCart,removeFromCart}=useContext(StoreContext)
    return (
        <>
            <div className='foodItem'>
                <div className="imgContainer">
                    <img className='foodItemImg' src={image} alt="img_not_found" style={{ height: "320px", width: "320px" }} />
                    {!cartItems[id]
                        ? <img src="./Images/plus.png" className='add' onClick={() => addToCart(id)} alt="" style={{ height: "25px", width: "25px" }} />
                        : <div className="itemCounter">
                            <img src="./Images/minus.png" onClick={() => removeFromCart(id)} alt="" style={{ height: "25px", width: "25px" }} />
                            <p>{cartItems[id]}</p>
                            <img src="./Images/plus.png" onClick={() => addToCart(id)} alt="" style={{ height: "25px", width: "25px" }} />
                        </div>
                    }
                </div>
                <div className="foodInfo">
                    <div className="foodName">
                        <p>{name}</p>
                    </div>
                    <div className="mratings">
                        <span className="fa fa-star mchecked"></span>
                        <span className="fa fa-star mchecked"></span>
                        <span className="fa fa-star mchecked"></span>
                        <span className="fa fa-star mchecked"></span>
                        <span className="fa fa-star-half-o mchecked"></span>
                    </div>
                    <p className='foodPrice'>₹ {price}</p>
                    <Link to={`/food/${id}`} style={{color:"#f06625"}}>View Details</Link>
                </div>
            </div>
        </>
    )
}
export default FoodCard