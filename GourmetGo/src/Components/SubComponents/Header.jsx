 import Styles from "../Styles/Header.module.css"
import Profile from "../SubComponents/Profile.jsx"
import Search from "../SubComponents/Search.jsx"
import ShopCard from "../SubComponents/ShopCard.jsx"
function Header(params) {
    
    return(<header className={Styles.Header}>
        <h1>Gourmet<span>Go</span> </h1>
<Search />

<div className={Styles.HeaderComponents}>
 
<Profile/>
<ShopCard/>
    </div>
     
    </header>)
}

export default Header
