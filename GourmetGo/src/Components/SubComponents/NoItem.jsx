import Styles from "../Styles/Content.module.css"

function Noitem(params) {
    return(<div className={Styles.NotFound}>
    <h3>No se pudo encontrar un articulo</h3>
   <i className="fa-solid fa-ghost fa-fade"></i>
    </div>)
}


export default Noitem