import { useContext, useEffect, useState } from "react";
import { DataBaseContext } from "../Context/DataBase.jsx";
import Styles from "../Styles/Content.module.css";

function Count({ ProductoID }) {

const { productoid, Setproductoid } = useContext(DataBaseContext);
 const { Collected,SetCollected } = useContext(DataBaseContext);
const { NumberCount,SetNumberCount } = useContext(DataBaseContext);
const{DataBase,SetDataBase}=useContext(DataBaseContext)
 const [quantity, setQuantity] = useState(1);
 
   
let Increase=0
let Decrease=0

  function ChangeQuantity(newQuantity) {
     
    Setproductoid(prev => {
      const found = prev.find(item => item.id === ProductoID);
      if (found) {
        
        return prev.map(item =>
          item.id === ProductoID ? { ...item, count: newQuantity } : item
        );
        
      } else {
      
        let ProductoDatos=DataBase.filter(item => item.producto_id == ProductoID)
       
       
        return [...prev, 
        { id: ProductoID, count: newQuantity,
          ProductoDatos:ProductoDatos}];
       }
       
    });

         
  }

   useEffect(() => {
    const found = productoid.find(item => item.id === ProductoID);
    setQuantity(found ? found.count : 0);
    
  }, [productoid, ProductoID]);

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    ChangeQuantity(newQuantity);
    SetNumberCount((prev)=>prev+1)
    


 
let Datos1=DataBase.filter((e)=>(e.producto_id==ProductoID ))
 
Datos1.map((valor)=>{
let Datos3=Number(valor.precios.replace("$",""))
Increase=Datos3
})

SetCollected((Total)=>Increase+Total)
  
  };
 
 
  const handleDecrease = () => {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      ChangeQuantity(newQuantity);
        SetNumberCount((prev)=>prev-1)
        
let Datos1=DataBase.filter((e)=>(e.producto_id==ProductoID ))
 
Datos1.map((valor)=>{
let Datos3=Number(valor.precios.replace("$",""))
Decrease=Datos3

})

 SetCollected(Collected-Decrease)

}};

  

 

 
  return (
    <div className={Styles.DivCount}>
      <button className={Styles.Quantity_Decre} onClick={handleDecrease}>-</button>
      <span>{quantity}</span>
      <button className={Styles.Quantity_Incre} onClick={handleIncrease}>+</button>
    </div>
    
  );
}

export default Count;
