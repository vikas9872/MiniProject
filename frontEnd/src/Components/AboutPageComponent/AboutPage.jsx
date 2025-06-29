import './AboutPage.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
const AboutPage = () => {
    useEffect(()=>{
        Aos.init();
    },[])
    return (
        <>
            <div className="aboutUsContentBox">
                <div className="headLine" data-aos="fade-right">
                    <h1 className='abtPart'>About</h1> <h1 className='usPart'>us</h1>
                </div>
                <div className="mainContentBox" data-aos="fade-up">
                    <div className="mainContentBoxLeftPart">
                        <img src="./Images/aboutUsImg.png" alt="about us img" className='abtimg' />
                    </div>
                    <div className="mainContentRightBoxPart" >
                        <div className="headLinePart">
                            <h1 className='aHead'>Crafting Culinary Excellence Together</h1>
                        </div>
                        <div className="animContentPart">
                            <div className="contentPart">
                                <p>Welcome to FC, where we create unforgettable dining experiences with fresh, locally-sourced ingredients. Our diverse menu offers both classic and innovative dishes, crafted by passionate chefs. We believe in the power of food to bring people together and strive to make every visit special. Enjoy our warm, inviting atmosphere and exceptional service. Come dine with us and taste the difference passion makes.</p>
                            </div>
                            <div className="btnPart">
                                <div className="firstBtnPart">
                                    <button className='ftbtns'>Free Delivery</button>
                                    <button className='ftbtns splbtn'>24/7 Service</button>
                                </div>
                                <div className="secondBtnPart">
                                    <button className='sdbtns'>Easy Payments</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AboutPage;