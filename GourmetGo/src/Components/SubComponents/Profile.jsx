import { useContext } from "react";
import { DataBaseContext } from "../Context/DataBase.jsx";
import Styles from "../Styles/Profile.module.css";

function Profile(params) {
 const {ShowLogin,SetShowLogin} = useContext(DataBaseContext);
const {isValidLogin,SetisValidLogin} = useContext(DataBaseContext);
const {LogOut,SetLogOut} = useContext(DataBaseContext);

  
    return(<div className={Styles.DivProfile} >

        
        
         
        {isValidLogin ?  
         (<>
          <button onClick={(e)=>{SetLogOut(true)}}>
          <i className="fa-solid fa-right-from-bracket"></i>
        </button>
       
        </>) : (<>

        <button onClick={(e)=>{SetShowLogin(true)}}>
        <i className="fa-regular fa-user"></i>
        </button>
        </>  )}
        
      
    </div >)
}

export default Profile
