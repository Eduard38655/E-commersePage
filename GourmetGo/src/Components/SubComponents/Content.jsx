import { useContext, useEffect, useState } from "react"
import { DataBaseContext } from "../Context/DataBase.jsx"
import Styles from "../Styles/Content.module.css"
import CountQuantity from "../SubComponents/Count.jsx"
import ItemNtFound from "../SubComponents/NoItem.jsx"

function Content(params) {
     const{DataBase,SetDataBase}=useContext(DataBaseContext)
     const[ProductoID,SetproductoID]=useState("")
    const[isShowButton,IsShow_Button]=useState(true)
        const {  Refresh,SetRefresh} = useContext(DataBaseContext);
 
  useEffect(()=>{
    IsShow_Button(true)
SetRefresh(false)
  },[Refresh])


async function AddToCart(e) {
  const id = e.target.id; 
 
    SetproductoID(id);
  IsShow_Button(false);
 
}
 

 


    return(<div className={Styles.CardsContainer}>

<div  className={Styles.Carts_Container} >
 
    { DataBase.length> 0 ?(<> 
    {
     DataBase.map((item,index)=>(
        <div key={index} className={Styles.DivCards}>
<img src={item.img} alt="" />
        <div className={Styles.TextDetails}>

            <h3>{item.producto}</h3>
            <p>{item.description}</p>
            <h4>{item.precios}</h4>
           
         
{ ProductoID==item.producto_id ? (<>

{isShowButton ? (<>
  <button className={Styles.ButtonAdd} id={item.producto_id} value={item.precios} onClick={AddToCart  } >Add to cart</button>
  </>) : (<>
<CountQuantity ProductoID={ProductoID} />
  </>)} 



</>) : (<><button className={Styles.ButtonAdd} id={item.producto_id} value={item.precios} onClick={AddToCart}  >
    Add to cart
    </button></>) }
  
   
</div>
</div>
    ))}
    
    </>) : (<> <ItemNtFound/></>)}
</div>

    </div>)
}

export default Content