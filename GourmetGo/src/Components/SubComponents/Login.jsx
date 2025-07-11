import { useContext, useState } from "react";
import { DataBaseContext } from "../Context/DataBase.jsx";
import Styles from "../Styles/Profile.module.css";

function Profile(params) {
        const {ShowLogin,SetShowLogin} = useContext(DataBaseContext);
    const {isShow,setShow} = useContext(DataBaseContext);
     const [UserName,SetUserName]=useState("")
     const [Password,SetPassword]=useState("")
      const [ErrorUserName,FaildUserName]=useState("")
     const [ErrorPassword,FaildPassword]=useState("")
    const {isValidLogin,SetisValidLogin} = useContext(DataBaseContext);
  

    function HandleValidation(params) {
       
        if (UserName=="" && Password=="") {
            FaildUserName("Input can't be empty")
            FaildPassword("Input can't be empty")
        }
        else if(UserName=="" ){
FaildUserName("Input can't be empty")
FaildPassword("")
        }
        
        
          else if(Password=="" ){
FaildUserName("")
FaildPassword("Input can't be empty")
        }
        else{
            FaildUserName("")
FaildPassword("")
  SetShowLogin(false)
        SetisValidLogin(true)
        }
    }

    return(<>
    {ShowLogin ? (<>
    
    <div className={Styles.Main_ShowInputs} >
       
 
<div className={Styles.DivInputs} >
    <div className={Styles.CloseLogin}>
        <button onClick={(e)=>{SetShowLogin(false)}} ><i className="fa-solid fa-xmark"></i></button>
    </div>

    <h2>Log in</h2>

<div className={Styles.DivInputInfo}>
<input type="email" name="" id="" placeholder="Email" onChange={(e)=>{SetUserName(e.target.value)}} required/>
 {ErrorUserName && ErrorUserName.length>0  ? (<p style={{color:"red"}}>{ErrorUserName}</p>) : (<></>)}

<input type="password" placeholder="Password" onChange={(e)=>{SetPassword(e.target.value)} } min={6} max={20} required/>
 {ErrorPassword  && ErrorPassword.length>0  ? (<p>{ErrorPassword}</p>) : (<></>)}
</div>
<button className={Styles.SubmitButton}  onClick={HandleValidation} >Submit</button>
 
</div>

 
    </div >
    
    </> ) : (<></>)}
    
    </>)
}

export default Profile
