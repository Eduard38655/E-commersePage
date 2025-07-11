import { useContext, useState } from "react";
import { DataBaseContext } from "../Context/DataBase.jsx";
 
 


function CheckOut(params) {


    const {NumberCount,SetNumberCount} = useContext(DataBaseContext);
const {isShow,setShow} = useContext(DataBaseContext);
const{DataBase,SetDataBase}=useContext(DataBaseContext)
const {productoid, Setproductoid } = useContext(DataBaseContext);
 const [Items, SetItems]=useState(true)
  const { Collected,SetCollected } = useContext(DataBaseContext);
    const {   ShowCheckOut,SetShowCheckOut} = useContext(DataBaseContext);
    const {isValidLogin,SetisValidLogin} = useContext(DataBaseContext);
   const {ShowLogin,SetShowLogin} = useContext(DataBaseContext);


    return(
    
    <>
      {ShowLogin ? (<>
     {ShowCheckOut ? ( <>
        
     <div>

        
    <button>Accept</button>
    
    
    
    </div>
        
        </>) : (<>
        </>)}
     
     
     </>) : (<>
     
     {}</>)
     
     }
    </>
    )
}

export default CheckOut