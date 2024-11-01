import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'
import { StoreContext } from '../../StoreContextComponent/storeContext';
import { toast, ToastContainer } from 'react-toastify';
const Navbar = ({setShowForm}) => {
    const [show,setShow]=useState(false);
    const {token,setToken,fclogo,loginlogo,setUser}=useContext(StoreContext)
    const logOut=()=>{
        localStorage.removeItem("token");
        setToken("");
        localStorage.removeItem("user");
        setUser("");
        toast.success("Logged Out Successfully!",{
            theme:"colored"
        })
    }
    return (
        <>
            <div className="navbar">
                <div className="nav-logo">
                    <img src={fclogo} alt="logo_is_not_found" />
                </div>
                <ul className='nav-links'>                   
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/spacialdishes">Special Dishes</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/location">Location</Link></li>
                        <Link to="/addtocart"><img src="./Images/cart.png" alt="" /></Link>
                        {
                            !token
                            // ?<img src="./Images/logIn.png" alt="" onClick={()=>setShowForm(true)} className='profilepic'/>
                            ?<img src={loginlogo} alt="" onClick={()=>setShowForm(true)} className='profilepic'/>
                            : <div className="profile">
                                <img src="/Images/profilepic.png" alt="profile_pic" className='profilepic'/>
                                <ul className="dropdown">
                                    {/* <li onClick={logOut}><img src="./Images/logOut.png" alt="" className='profilepic' /><p>Log Out</p></li> */}
                                    <li onClick={logOut}><img src="/Images/logOut.png" alt="" className='profilepic' /><p>Log Out</p></li>
                                </ul>
                            </div>
                        }              
                </ul>
               {show && <ul className='mobile-links'>                   
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/spacialdishes">Special Dishes</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/location">Location</Link></li>
                        <Link to="/addtocart"><img src="/Images/cart.png" alt="" /></Link>
                        {
                            !token
                            ?<img src="/Images/logIn.png" alt="" onClick={()=>setShowForm(true)} className='profilepic'/>
                            : <div className="profile">
                                <img src="/Images/profilepic.png" alt="profile_pic" className='profilepic'/>
                                <ul className="dropdown">
                                    <li onClick={logOut}><img src="/Images/logOut.png" alt="" className='profilepic' /><p>Log Out</p></li>
                                </ul>
                            </div>
                        }                        
                </ul>}
                <div className='burger-icon'>
                    <img src="./Images/hamburgericon.png" className='hicon' alt="cannot be displayed" onClick={()=>setShow(!show)}/>
                </div>   
            </div>
            <ToastContainer/>
        </>
    )
}

export default Navbar
