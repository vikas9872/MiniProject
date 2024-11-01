import './MainCategory.css'
import { mlist } from '../../Assets/List'
import SubCategory from './SubCategory'
import { ToastContainer } from 'react-toastify'
const MainCategory = ({category,setCategory}) => { 
    return(
        <>
            <div className="categoryBox">
                <div className="menuHeading">
                    <h1 className='mHead'>Me<span>nu</span></h1>
                </div>
                <div className="menuList">
                    {mlist.map((item,index )=>{
                        return(
                            <div onClick={()=>setCategory(pre=>pre===item.name? "all": item.name)} key={index} className="menulistItem">
                                <img src={item.image} alt="img_not_found" className={category===item.name? " active":""} style={{height: "50px",width: "70px"}} />
                                <p>{item.name}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <br />
            <SubCategory category={category} setCategory={setCategory}/>
            <ToastContainer/>
        </>
    )
}
export default MainCategory;