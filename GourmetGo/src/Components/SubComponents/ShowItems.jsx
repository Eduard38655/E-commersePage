import { useContext, useState } from "react";
import { DataBaseContext } from "../Context/DataBase.jsx";
import Styles from "../Styles/ShopCard.module.css";

function ShowCart() {
const {NumberCount,SetNumberCount} = useContext(DataBaseContext);
const {isShow,setShow} = useContext(DataBaseContext);
const{DataBase,SetDataBase}=useContext(DataBaseContext)
const {productoid, Setproductoid } = useContext(DataBaseContext);
 const [Items, SetItems]=useState(true)
  const { Collected,SetCollected } = useContext(DataBaseContext);
    const {ShowCheckOut,SetShowCheckOut} = useContext(DataBaseContext);
   const {ShowLogin,SetShowLogin} = useContext(DataBaseContext);
 const {isValidLogin,SetisValidLogin} = useContext(DataBaseContext);

   let Increase_Button=0
let Decrease_Button=0
  
 
 
 
 

function Delete_Item(ItemID) {
  

let Delete_Button=productoid.filter((producto)=>(producto.id !== ItemID))
let Change_Count=productoid.filter((producto)=>(producto.id == ItemID))
 

Change_Count.map((item)=>{
  if (NumberCount==0) {
  return;
 }
 
else{
    SetNumberCount(NumberCount-item.count)
 }

})

Setproductoid(Delete_Button );

   
 
 
}







function Decrese(ItemID) {


let Change_Count=productoid.filter((producto)=>(producto.id == ItemID))

 
 
 Change_Count.map((item)=>{item.count=item.count-1})
 
 SetItems(false)
  
 SetNumberCount((NumberCount)=>NumberCount-1)
 
let Datos1=DataBase.filter((e)=>(e.producto_id==ItemID))
 
Datos1.map((valor)=>{
let Datos3=Number(valor.precios.replace("$",""));
Decrease_Button=Datos3;
 
})
   SetCollected(Collected-Decrease_Button);
}

function Increase(ItemID) {


let Change_Count=productoid.filter((producto)=>(producto.id == ItemID))

 Change_Count.map((item)=>{item.count=item.count+1})
 
 SetItems(false)
 
 SetNumberCount((NumberCount)=>NumberCount+1)
 let Datos1=DataBase.filter((e)=>(e.producto_id==ItemID))
 
 Datos1.map((valor)=>{
let Datos3=Number(valor.precios.replace("$",""))
Increase_Button=Datos3;
})
   SetCollected((Total)=>Increase_Button+Total)

}

function HandleCheckOut(params) {
  if (isValidLogin) {
     SetShowCheckOut(false)
     SetShowLogin(false)
     setShow(false)
     
  }
  else{
SetShowCheckOut(true)
     SetShowLogin(true) 
     console.log("ff");
     
  }
    
}
return (
    <>
       
        {isShow ? (<>
         
       {NumberCount!==0 ?(<>
        <div className={Styles.modal_active_backdrop} >
 <div className={Styles.modal_active_content}>

          <div className={Styles.modal_active_sub_content}>
            <h2>Your shop cart</h2>
              <button className="modal-close" onClick={(e)=>{setShow(false)}} >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

             <div className={Styles.Div_Sub_Container}>
              
 { productoid.map((item)=>(

      <div  className={Styles.Div_Detalles} key={item.id}>
    { item.ProductoDatos.map((producto,index)=>(
      <>
       <div className={Styles.Div_Main_Info} key={index}>

 
  <div className={Styles.Div_img}>
  <img src={producto.img} alt="" />
</div>

<p className={Styles.Text}>{producto.producto} <br /> <span>{producto.precios}</span></p>

      <div className={Styles.Div_Optiones}>
      <button onClick={(e)=>Decrese(item.id)} >-</button>
      <p>{item.count}</p>
      <button onClick={(e)=>Increase(item.id)} >+</button>
      </div>
 
      <button onClick={(e)=>Delete_Item(item.id)} className={Styles.Button_Delete} >
        <i className="fa-solid fa-trash"></i>
      </button>

</div>
        
 
      </>
      
    ))
    }
 
</div>
 ))
 }
</div>

   <div className={Styles.Div_CheckOut}>
    <p>Total: <span>$ {Collected}</span></p>
        <button onClick={HandleCheckOut}>
  Proceed to Checkout
</button>

   </div>
            
  </div>
             
</div>
      
</>) : (<>
       
        <div className={Styles.modal_backdrop} >

          <div className={Styles.modal_content}  >

            <div className={Styles.modal_sub_content}>
            <h2>Your shop cart</h2>
              <button className="modal-close" onClick={(e)=>{setShow(false)}} >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

            <p>Your cart is empty. Add some delicious food!</p>
            
          </div>

        </div>
        
       </>)}
       </>) : (<> </>)}
      
    </>
  );
}

export default ShowCart;
