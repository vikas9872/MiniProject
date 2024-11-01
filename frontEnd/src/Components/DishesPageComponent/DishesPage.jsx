import "./DishesPage.css";
import React, { useContext } from 'react';
import DishesCard from "../DishesCardComponent/DishesCard.js";
import { StoreContext } from "../../StoreContextComponent/storeContext.js";

const DishesPage = () => {
    const { slist } = useContext(StoreContext)
    return (
        <>
            <div className="dishesMainContentBox">
                <div className="dishesHeadLine">
                    <h1 className="firstPart">Special <span>Dishes</span></h1>
                </div>
                <div className="dishesMainContent">
                    {slist.map((item, index) => (
                        <DishesCard
                            key={index}
                            id={item._id}
                            name={item.name}
                            price={item.price}
                            image={item.image}
                            description={item.description}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default DishesPage;




// import "./DishesPage.css"
// import React, { useContext } from 'react'
// import { StoreContext } from "../../StoreContextComponent/storeContext.js";
// import DishesCard from "../DishesCardComponent/DishesCard.js";
// const DishesPage = () => {
//     const { slist } = useContext(StoreContext)
//     return (
//         <>
//             <div className="splDishesContentBox">
//                 <div className="dishesHeadLine" data-aos="fade-right">
//                     <h1 className="firstPart">Special <span>Dishes</span></h1>
//                 </div>
//                 <div className="dishesMainContent">
//                     {slist.map((item, index) => {
//                         return (
//                             <DishesCard
//                                 key={index}
//                                 id={item._id}
//                                 name={item.name}
//                                 price={item.price}
//                                 image={item.image}
//                                 description={item.description}
//                             />
//                         )
//                     })}
//                 </div>
//             </div>
//         </>
//     )
// }
// export default DishesPage;
// // <>
// //     <div className="splDishesContentBox">
// //         <div className="dishesHeadLine" data-aos="fade-right">
// //             <h1 className="firstPart">Special <span>Dishes</span></h1>
// //         </div>
// //         <div className="dishesMainContent">
// //             <div className="dishesBox" data-aos="flip-right">
// //                 <div className="imgPart">
// //                     <img src="./Images/chickpeaCurry.png" alt="imgOne" className="img" />
// //                 </div>
// //                 <div className="dishcontentPart">
// //                     <div className="dishNamePart">
// //                         <h2>Chick Pea Curry</h2>
// //                     </div>
// //                     <div className="ratings">
// //                         <span className="fa fa-star checked"></span>
// //                         <span className="fa fa-star checked"></span>
// //                         <span className="fa fa-star checked"></span>
// //                         <span className="fa fa-star checked"></span>
// //                         <span className="fa fa-star-half-o checked"></span>
// //                     </div>
// //                     <div className="amtOrder">
// //                         <div className="amt">
// //                             <p>Cost: $99</p>
// //                         </div>
// //                         <div className="order">
// //                             <button className="orderbtns">Add to cart</button>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //             <div className="dishesBox" data-aos="flip-right">
// //                 <div className="imgPart">
// //                     <img src="./Images/fruitSalad.png" alt="imgOne" className="img" />
// //                 </div>
// //                 <div className="dishcontentPart">
// //                     <div className="dishNamePart">
// //                         <h2>Fruit Salad</h2>
// //                     </div>
// //                     <div className="ratings">
// //                         <span className="fa fa-star checked"></span>
// //                         <span className="fa fa-star checked"></span>
// //                         <span className="fa fa-star checked"></span>
// //                         <span className="fa fa-star checked"></span>
// //                         <span className="fa fa-star-half-o checked"></span>
// //                     </div>
// //                     <div className="amtOrder">
// //                         <div className="amt">
// //                             <p>Cost: $89</p>
// //                         </div>
// //                         <div className="order">
// //                             <button className="orderbtns">Add to cart</button>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //             <div className="dishesBox" data-aos="flip-right">
// //                 <div className="imgPart">
// //                     <img src="./Images/vegSalad.png" alt="imgOne" className="img" />
// //                 </div>
// //                 <div className="dishcontentPart">
// //                     <div className="dishNamePart">
// //                         <h2>Vegetable Salad</h2>
// //                     </div>
// //                     <div className="ratings">
// //                         <span className="fa fa-star checked"></span>
// //                         <span className="fa fa-star checked"></span>
// //                         <span className="fa fa-star checked"></span>
// //                         <span className="fa fa-star checked"></span>
// //                         <span className="fa fa-star-half-o checked"></span>
// //                     </div>
// //                     <div className="amtOrder">
// //                         <div className="amt">
// //                             <p>Cost: $79</p>
// //                         </div>
// //                         <div className="order">
// //                             <button className="orderbtns">Add to cart</button>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //             <div className="dishesBox" data-aos="flip-left">
// //                 <div className="imgPart">
// //                     <img src="./Images/vegFriedRice.png" alt="imgOne" className="img" />
// //                 </div>
// //                 <div className="dishcontentPart">
// //                     <div className="dishNamePart">
// //                         <h2>Veg Fried Rice</h2>
// //                     </div>
// //                     <div className="ratings">
// //                         <span className="fa fa-star checked"></span>
// //                         <span className="fa fa-star checked"></span>
// //                         <span className="fa fa-star checked"></span>
// //                         <span className="fa fa-star checked"></span>
// //                         <span className="fa fa-star-half-o checked"></span>
// //                     </div>
// //                     <div className="amtOrder">
// //                         <div className="amt">
// //                             <p>Cost: $69</p>
// //                         </div>
// //                         <div className="order">
// //                             <button className="orderbtns">Add to cart</button>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //             <div className="dishesBox" data-aos="flip-left">
// //                 <div className="imgPart">
// //                     <img src="./Images/dosa.png" alt="imgOne" className="img" />
// //                 </div>
// //                 <div className="dishcontentPart">
// //                     <div className="dishNamePart">
// //                         <h2>Dosa</h2>
// //                     </div>
// //                     <div className="ratings">
// //                         <span className="fa fa-star checked"></span>
// //                         <span className="fa fa-star checked"></span>
// //                         <span className="fa fa-star checked"></span>
// //                         <span className="fa fa-star checked"></span>
// //                         <span className="fa fa-star-half-o checked"></span>
// //                     </div>
// //                     <div className="amtOrder">
// //                         <div className="amt">
// //                             <p>Cost: $59</p>
// //                         </div>
// //                         <div className="order">
// //                             <button className="orderbtns">Add to cart</button>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //             <div className="dishesBox" data-aos="flip-left">
// //                 <div className="imgPart">
// //                     <img src="./Images/vegRolls.png" alt="imgOne" className="img" />
// //                 </div>
// //                 <div className="dishcontentPart">
// //                     <div className="dishNamePart">
// //                         <h2>Veg Sausage Rolls</h2>
// //                     </div>
// //                     <div className="ratings">
// //                         <span className="fa fa-star checked"></span>
// //                         <span className="fa fa-star checked"></span>
// //                         <span className="fa fa-star checked"></span>
// //                         <span className="fa fa-star checked"></span>
// //                         <span className="fa fa-star-half-o checked"></span>
// //                     </div>
// //                     <div className="amtOrder">
// //                         <div className="amt">
// //                             <p>Cost: $49</p>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     </div>
// // </>