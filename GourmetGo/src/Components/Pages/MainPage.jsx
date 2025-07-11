import { useContext } from "react"
import { DataBaseContext } from "../Context/DataBase.jsx"
import Styles from "../Styles/MainPage.module.css"
import Categorias from "../SubComponents/Categorias.jsx"
import CheckOut from "../SubComponents/CheckOut.jsx"
import Content from "../SubComponents/Content.jsx"
import Footer from "../SubComponents/Footer.jsx"
import Header from "../SubComponents/Header.jsx"
import Login from "../SubComponents/Login.jsx"
import LogOut from "../SubComponents/Logout.jsx"
import ShowCart from "../SubComponents/ShowItems.jsx"

function MainPage(params) {
   const{ DataBase,SetDataBase}=useContext(DataBaseContext)
   const{DataReset,SetDataReset}=useContext(DataBaseContext)
  
  
   
    return(<article className={Styles.MainPageContainer}>
    <Header/>
    <Categorias/>
    <Content />
<ShowCart/>
<LogOut/>
<Login />
<CheckOut/>
    <Footer/>
    </article>)
}

export default MainPage