import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/NavbarComponent/Navbar';
import HomePage from './Components/HomePageComponent/HomePage';
import AboutPage from './Components/AboutPageComponent/AboutPage';
import DishesPage from './Components/DishesPageComponent/DishesPage';
import MainCategory from './Components/MenuPageComponent/MainCategory';
import CartPage from './Components/CartPageComponent/CartPage';
import { useState } from 'react';
import FormPopUp from './Components/FormComponent/FormPopUp';
import PlaceOrder from './Components/PlaceOrderComponent/PlaceOrder';
import UserLocation from './Components/LocationComponent/LocationPage';
import FoodDetailpage from './Components/FoodDetailsPage/FoodDetailpage';

function App() {
  const [showForm, setShowForm] = useState(false)
  const [category, setCategory]=useState("all")
  const [cartItems, setCartItems] = useState([]);
  return (
    <>
    {showForm ? <FormPopUp setShowForm={setShowForm}/>:<></>}
      <div className="App">
        <Navbar setShowForm={setShowForm} />
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='about' element={<AboutPage />}/>
          <Route path='spacialdishes' element={<DishesPage />}/>
          <Route path='menu' element={<MainCategory category={category} setCategory={setCategory} setCartItems={setCartItems} />}/>
          <Route path='addtocart' element={<CartPage cartItem={cartItems} />}/>
          <Route path='location' element={<UserLocation/>}/>
          <Route path='placeorder' element={<PlaceOrder/>}/>
          <Route path="food/:id" element={<FoodDetailpage />}/>
        </Routes>
        
      </div>
    </>
  );
}

export default App;
