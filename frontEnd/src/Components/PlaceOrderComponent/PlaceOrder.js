import React, { useContext, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../StoreContextComponent/storeContext'

import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
const PlaceOrder = () => {
  const { getTotalAmount, token, flist, cartItems, url } = useContext(StoreContext)
  const [odata, setOData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: ""
  })

  const onOChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setOData(prevData => ({ ...prevData, [name]: value }))
  }
  const placeOrder = async (e) => {
    e.preventDefault();
    let orderItems = [];
    flist.forEach((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo)
      }
    })
    let orderData = {
      address: odata,
      items: orderItems,
      amount: getTotalAmount() + 20,
    }
    try {
      const response = await axios.post(url + '/api/order/place', orderData, { headers: { token } });
      if (response.data && response.data.success) {
        toast.success('Order placed successfully!', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        const { session_url } = response.data;
        setTimeout(() => {
          window.location.replace(session_url);
        }, 3000);
      } else {
        toast.error(`Error placing order: ${response.data.message || 'Unknown error'}`, {
          theme: "colored"
        });
      }
    } catch (error) {
      console.error('Error while placing order:', error.response ? error.response.data : error.message);
      toast.error('Error: Unable to place the order. Please check your connection and try again.', {
        theme: "colored"
      });
    }
  };

  return (
    <>
      <div className="orderBox">
        <div className="placeOrderLeft">
          <form onSubmit={placeOrder} className="placeOrderForm">
            <p className="orderTitle">Delivery Information</p>
            <div className="multiFields">
              <input type="text" placeholder='First Name' required name='firstName' onChange={onOChangeHandler} value={odata.firstName} />
              <input type="text" placeholder='Last Name' required name='lastName' onChange={onOChangeHandler} value={odata.lastName} />
            </div>
            <input type="email" placeholder='emailaddress' required name='email' onChange={onOChangeHandler} value={odata.email} />
            <input type="text" placeholder='street' required name='street' onChange={onOChangeHandler} value={odata.street} />
            <div className="multiFields">
              <input type="text" placeholder='City' required name='city' onChange={onOChangeHandler} value={odata.city} />
              <input type="text" placeholder='State' required name='state' onChange={onOChangeHandler} value={odata.state} />
            </div>
            <div className="multiFields">
              <input type="text" placeholder='zipcode' required name='zipcode' onChange={onOChangeHandler} value={odata.zipcode} />
              <input type="text" placeholder='Country' required name='country' onChange={onOChangeHandler} value={odata.country} />
            </div>
            <input type="text" placeholder='phonenumber' required name='phone' onChange={onOChangeHandler} value={odata.phone} />
          </form>
        </div>
        <div className="placeOrderRight">
          <div className="cartBottom">
            <div className="Total Bill">
              <h2>Cart Total</h2>
            </div>
            <br />
            <div className="cartTotalDetailBox">
              <div className="ctitle">
                <p>Subtotal</p>
              </div>
              <div className="camt">
                <p>{getTotalAmount()}</p>
              </div>
            </div>
            <div className="cartTotalDetailBox">
              <div className="ctitle">
                <p>Delivery Fee</p>
              </div>
              <div className="camt">
                <p>{20}</p>
              </div>
            </div>
            <div className="cartTotalDetailBox">
              <div className="ctitle">
                <p>Total</p>
              </div>
              <div className="camt">
                <p>{getTotalAmount() + 20}</p>
              </div>
            </div>
            <div className="placeorderbutton">
              <button onClick={placeOrder} className='placeorderbtn'>PROCEED TO PAY</button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}
export default PlaceOrder 