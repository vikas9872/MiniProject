import { createContext, useEffect } from 'react'
import { slist } from '../Assets/List'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';  
import 'react-toastify/dist/ReactToastify.css'; 
export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
    // Logos
    const [fclogo, setFclogo] = useState("/Images/logo.svg")
    const [loginlogo, setLoginlogo] = useState("/Images/logIn.png")
    const [logoutlogo, setLogooutlogo] = useState("/Images/logoOut.png")

    // Cart Page
    const [cartItems, setCartItems] = useState({})
    const [flist, setFlist] = useState([])
    const addToCart = async (itemId) => {
        if (token) {
            if (!cartItems[itemId]) {
                setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
            }
            else {
                setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
            }
            if (token) {
                await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } })
            }
        }
        else {
            toast.error("Please log in", { 
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
       
    }
    const removeFromCart = async (itemId) => {
        if (localStorage.token) {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
            if (token) {
                await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } })
            }
        }
        else {
            toast.error("Please log in", { 
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    }
    const fetchFlist = async () => {
        const response = await axios.get(url + "/api/food/list")
        setFlist(response.data.data)
    }
    useEffect(() => {
        async function loadData() {
            await fetchFlist()
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"))
                await loadcartData(localStorage.getItem("token"))
            }
        }
        loadData()
    }, [])
    const loadcartData = async (token) => {
        try {
            const response = await axios.post(url + "/api/cart/get", {}, { headers: { token } });
            if (response.data && response.data.cartData) {
                setCartItems(response.data.cartData);
                localStorage.setItem('cartItems', JSON.stringify(response.data.cartData));
            } else {
                console.error("No cart data returned from the server.");
            }
        } catch (error) {
            console.error("Error in loading cart items:", error.response ? error.response.data : error.message);
        }
    };
    
    const getTotalAmount = () => {
        let totalAmt = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = flist.find((product) => product._id === item)
                totalAmt += itemInfo.price * cartItems[item];
            }
        }
        return totalAmt;
    }



    // Login Page
    const url = "http://localhost:3000"
    const [token, setToken] = useState(localStorage.getItem('token') || "")
    const [user, setUser] = useState("");
    const [isFirstLogin, setIsFirstLogin] = useState(true);


    const contextValue = {
        fclogo,
        setFclogo,
        loginlogo, setLoginlogo,
        logoutlogo, setLogooutlogo,
        flist,
        slist,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalAmount,
        url,
        token,
        setToken,
        user,
        setUser,
        isFirstLogin,
        setIsFirstLogin,
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;