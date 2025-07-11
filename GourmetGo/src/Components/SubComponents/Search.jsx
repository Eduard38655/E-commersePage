import { useContext, useEffect, useState } from "react"
import { DataBaseContext } from "../Context/DataBase.jsx"
import Styles from "../Styles/Header.module.css"

function Search(params) {
      const{ DataBase,SetDataBase}=useContext(DataBaseContext)
      const{DataReset,SetDataReset}=useContext(DataBaseContext)
      const[SearchValor,SetSearchValor]=useState("")

useEffect(()=>{
   

   if (SearchValor=="") {
      SetDataBase(DataReset)
      return;
   }
   const Filter=DataReset.filter((item)=>
       item.producto.toLowerCase().startsWith(SearchValor.toLowerCase())
     )

   SetDataBase(Filter)
 
},[SearchValor])


    return(<div className={Styles.DivSearch}>
    <i className="fa-solid fa-magnifying-glass" style={{color:"#D1D5DB"}}></i>
       <input type="text" placeholder="Search dishes..."  onChange={(e)=>{SetSearchValor(e.target.value)  }} />
    </div >)
}

export default Search
