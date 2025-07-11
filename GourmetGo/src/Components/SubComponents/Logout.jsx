import { useContext } from "react";
import { DataBaseContext } from "../Context/DataBase.jsx";

import Styles from "../Styles/Profile.module.css";

function LogOut(params) {
    
    const {isValidLogin,SetisValidLogin} = useContext(DataBaseContext);

    const {LogOut,SetLogOut} = useContext(DataBaseContext);
    return(<>
    
    { LogOut ? (<>
    
    <div className={Styles.Main_ShowInputs}>
    
  <div className={Styles.LogOut_Container}>
<h2>LogOut</h2>
      <div>
        <button  style={{background:"red"}} onClick={(e)=>(SetLogOut(false))} >Cancelar </button>
        <button style={{background:"green"}} onClick={(e)=>{SetisValidLogin(false),SetLogOut(!LogOut)}} >Leave</button>
    </div>
  </div>
    
    
    </div>
    
    </>) : ( <></>)}
    
    </>)
}


export default LogOut