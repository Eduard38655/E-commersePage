import { useContext, useEffect, useState } from "react"
import { DataBaseContext } from "../Context/DataBase.jsx"
import Styles from "../Styles/Categoria.module.css"

function Categorias(params) {

const{ DataBase,SetDataBase}=useContext(DataBaseContext)
const{DataReset,SetDataReset}=useContext(DataBaseContext)
const [categoriaID,SetCategoriaID]=useState("")
const{ Categorias,SetCategorias}=useContext(DataBaseContext)

 
useEffect(()=>{

    const CategoriaChanges=DataReset.filter((item)=>item.categoria_id==categoriaID);
    SetDataBase(CategoriaChanges)
    
},[categoriaID])


    return(<div className={Styles.OrderCategorias}>
    <h2>Our Delicious Menu</h2>

<p>Browse our curated selection of fine foods, or filter by category.</p>
<div className={Styles.CategoriaText}>
    <h4>Filter by Category</h4>

   <div className={Styles.Categorias_opt}>

    <button onClick={(e)=>{SetDataBase(DataReset)}} >All</button>

     {Categorias.map((categoria,index)=>(
        <button key={index}   onClick={(e)=>{SetCategoriaID(categoria.categoria_id)}}>{categoria.categoria}</button>
    ))}

   </div>
</div>
</div>)
}

export default Categorias