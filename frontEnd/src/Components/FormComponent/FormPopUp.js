import { useContext, useState } from 'react';
import './FormPopUp.css'
import axios from 'axios'
import { StoreContext } from '../../StoreContextComponent/storeContext';
import { toast, ToastContainer } from 'react-toastify';  
import 'react-toastify/dist/ReactToastify.css';          
const FormPopUp = ({ setShowForm }) => {
    const {url} = useContext(StoreContext)
    const [currentState, setCurrentState] = useState('Sign Up');
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })
    const onChangeHandler = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        let newUrl = url;
        if(currentState==="Log In"){
            newUrl+="/api/user/login"
        }
        else{
            newUrl+="/api/user/register"
        }
        const response=await axios.post(newUrl,data);

        if (response.data.success) {
            localStorage.setItem("token", response.data.tkn);
            localStorage.setItem("user",response.data.userID);
            toast.success('Logged in successfully!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            setTimeout(()=>{
                window.location.reload(true)
            },2000)
        }else{
                // alert(response.data.message)
                toast.error(response.data.message, { position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
        }
    };
    return (
        <>
            <div className="formpopup" data-aos="zoom-in">
                <form className="formcontainer" onSubmit={handleSubmit}>
                    <div className="formtitle">
                        <h1 className='fHead'>{currentState}</h1>
                        <img onClick={() => setShowForm(false)} src="Images/crossicon.png" alt="Cros_Icon" className='closeicon' />
                    </div>
                    <div className="forminput">
                        {currentState === 'Log In'
                            ? <></>
                            : <input type="text" placeholder='Enter username'  name='name' value={data.name} onChange={onChangeHandler} />}
                        <input type="email" placeholder='Enter email'  name='email' value={data.email} onChange={onChangeHandler} />
                        <input type="password" placeholder='Enter password'  name='password' value={data.password} onChange={onChangeHandler} />
                    </div>
                    {
                        currentState === "Sign Up"
                            ? <button type="submit">Create account</button>
                            : <button>Log In</button>
                    }
                    <div className="formcondition">
                        {
                            currentState === "Log In"
                                ? <p>Create a new account? <span onClick={() => { setCurrentState("Sign Up") }}>Click here</span></p>
                                : <p>Already have an account? <span onClick={() => { setCurrentState("Log In") }}>Login here</span></p>
                        }
                    </div>
                </form>
            </div>
            <ToastContainer/>
        </>
    )
}
export default FormPopUp;