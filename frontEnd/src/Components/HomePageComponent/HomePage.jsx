import './HomePage.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
const HomePage = () => {
    useEffect(()=>{
        Aos.init();
    },[])
    return (
        <>
            <div className="contentBox">
                <div className="content">
                    <div className="mainContent" data-aos="fade-down">
                        <div className="firstPart">
                            <h2>Delicious <span>food,</span></h2>
                        </div>
                        <div className="secondPart">
                            <h2><span>Quick</span> delivery</h2>
                        </div>
                    </div>
                    <div className="contentexp" data-aos="fade-up">
                        <p>"Deliciousness Delivered to Your Doorstep!🌿✨</p>
                        <p>Whether you're looking for a light bite or a hearty meal,</p>
                        <p>we've got something that will satisfy your taste buds and fuel your day."</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomePage;