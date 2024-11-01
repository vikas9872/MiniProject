import './DishesCard.css'
const DishesCard = ({ id, name, price, image, description }) => {
    return (
        <div className="mainCard">
            <div className="imgContainer">
                <img src={image} alt="img_not_found" className="simg" />
            </div>
            <div className="checked">
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star-half-o"></span>
            </div>
            <div className="name-price-description">
                <div className="namebox">
                    <p className='dishName'>{name}</p>
                </div>
                <div className="pricebox">
                    <p className='dishPrice'>₹ {price}</p>
                </div>
                <div className="descriptionbox">
                    <p className='dishDescription'>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default DishesCard
