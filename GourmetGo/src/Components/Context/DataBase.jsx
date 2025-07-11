import { createContext, useEffect, useState } from "react";
import DataBase_Categorias from "../../../Backend-Controled/Categorias.js";
import DataBase_Content from "../../../Backend-Controled/DataBase.js";

export const DataBaseContext=createContext()

function DataBaseProvider({children}) {
const [DataBase,SetDataBase]=useState([])
const [DataReset,SetDataReset]=useState([])
const [productoid,Setproductoid]=useState([])
const [NumberCount,SetNumberCount]=useState(0)
const [isShow,setShow]=useState(false)
const [Refresh,SetRefresh]=useState(false)
const [Collected,SetCollected]=useState(0)
const [ShowLogin,SetShowLogin]=useState(false)
const [isValidLogin,SetisValidLogin]=useState(false)
const [Categorias,SetCategorias]=useState([])
const [ShowCheckOut,SetShowCheckOut]=useState(false)
const[LogOut,SetLogOut]=useState(false)


    useEffect(()=>{
 
  
SetDataReset(DataBase_Content)
SetDataBase(DataBase_Content)
SetCategorias(DataBase_Categorias)
 
   
    },[ ])


    return(
    <DataBaseContext.Provider value={{
        DataBase,SetDataBase,
        DataReset,SetDataReset,
        NumberCount,SetNumberCount,
        productoid,Setproductoid,
        isShow,setShow,
        Refresh,SetRefresh,
        ShowLogin,SetShowLogin,
        Collected,SetCollected,
        isValidLogin,SetisValidLogin,
        Categorias,SetCategorias,
        ShowCheckOut,SetShowCheckOut,
        LogOut,SetLogOut}}>
    {children}
    </DataBaseContext.Provider>

)
    
}

export default DataBaseProvider