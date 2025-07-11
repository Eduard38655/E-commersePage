import Styles from "../Styles/Footer.module.css"
function Footer(params) {

    return(<footer className={Styles.Footer}>
    <p>© 2025 GourmetGo. All rights reserved.</p>
    <p>Delicious food, delivered to your doorstep.</p>

    <div>
        <button><a href="https://www.linkedin.com/in/eduardo-ferreras-de-los-santos-13632925a/" target="_blank"><i className="fa-brands fa-linkedin"></i></a></button>
        <button><a href="https://github.com/Eduard38655" target="_blank"><i className="fa-brands fa-github"></i></a></button>
    </div>
    </footer>)
}

export default Footer

 
 