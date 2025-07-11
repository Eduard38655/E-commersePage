  import { useContext } from "react";
import { DataBaseContext } from "../Context/DataBase.jsx";
import Styles from "../Styles/Header.module.css";
 
function ShopCard(params) {
const { NumberCount,SetNumberCount } = useContext(DataBaseContext);
const {isShow,setShow} = useContext(DataBaseContext);
const {Refresh,SetRefresh} = useContext(DataBaseContext);
 
 
      
     
    return(
<div className={Styles.ShopCart}>
   <button onClick={(e)=>{SetRefresh(true),setShow(true)}}> <i className="fa-solid fa-cart-shopping"></i></button>
   <div className={Styles.DivCount}>
   <span>{NumberCount}</span>
   </div>
</div>)
}

export default ShopCard
