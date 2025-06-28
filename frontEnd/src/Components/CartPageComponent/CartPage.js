import './CartPage.css'
import { useContext } from 'react'
import { StoreContext } from '../../StoreContextComponent/storeContext'
import {useNavigate} from 'react-router-dom'
const CartPage = () => {
    const { cartItems, flist, removeFromCart } = useContext(StoreContext)
    const navigate=useNavigate();
    const handleProceed=()=>{
        navigate("/placeorder")
    }
    return (
        <>
            <div className="cartBox">
                <div className="cartheadingPart">
                    <h1 className='cartHead'>Item <span className='spancartHead'>Added</span> to the <span className='spancartHead'>Cart</span></h1>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            flist.map((item, index) => {
                                if (cartItems[item._id] > 0) {
                                    return (
                                        <tr key={item._id}>
                                            <td>{item.name}</td>
                                            <td>{item.price}</td>
                                            <td>{cartItems[item._id]}</td>
                                            <td>{item.price * cartItems[item._id]}</td>
                                            <td>
                                                <button onClick={() => removeFromCart(item._id)} className='itemRemoveBtn'>Remove</button>
                                            </td>
                                        </tr>
                                    )
                                }
                                return null;
                            })
                        }
                    </tbody>
                </table>
                <br />
                <br />
                <br />
                <div className="cartBottom">
                    <div className="placeorderbutton">
                        <button onClick={handleProceed} className='placeorderbtn'>PROCEED TO ORDER</button>
                    </div>
                </div>
            </div>

        </>
    )
}
export default CartPage;