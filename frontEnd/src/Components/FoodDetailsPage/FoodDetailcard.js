import React from 'react';
import './FoodDetailcard.css';
import ReviewForm from '../ReviewComponent/ReviewForm';
import ReviewList from '../ReviewComponent/ReviewList';

const FoodDetailcard = ({ id, name, price, image, description, productId, restaurant }) => {
    return (
        <div className='foodDetailBox'>
            <div className="foodDetailInfotwoCol">
                <div className="foodDetailInfo">
                    <div className="foodDetailImg">
                        <img className='foodItemImg' src={image} alt="img_not_found" style={{ height: "320px", width: "320px" }} />
                    </div>
                    <div className="foodDetailName">
                        <p className='fDetailName'>{name}</p>
                    </div>
                    <div className="restaurantName">
                        <p className="restauName">{restaurant}</p>
                    </div>
                    <div className="mDetailratings">
                        <span className="fa fa-star mchecked"></span>
                        <span className="fa fa-star mchecked"></span>
                        <span className="fa fa-star mchecked"></span>
                        <span className="fa fa-star mchecked"></span>
                        <span className="fa fa-star-half-o mchecked"></span>
                    </div>
                    <div className="priceDetail">
                        <p className='foodDetailPrice'>₹ {price}</p>
                    </div>
                    <div className="descriptionDetial">
                        <p>{description}</p>
                    </div>
                </div>
                <div className="rForm">
                    <ReviewForm productId={productId} />
                </div>
            </div>
            <div className="foodDetailInfooneCol">
                <div className="rList">
                    <ReviewList productId={productId} />
                </div>
            </div>
        </div>
    );
}

export default FoodDetailcard;
