import { Link } from "react-router-dom"
import "../styles/NavBar.css"
import Logo from "../assets/Antares_logo.png"

const NavBar = () => {
    return (
        <nav className="NavBar">
            <div className="container Nav_layout">
                <Link to={"/"} className="Logo">
                    <img src={Logo} alt="Logo"/>
                </Link>
                <div className="Options">
                    <Link to={"Nosotros"}>Nosotros</Link>
                    <Link to={"Iniciativas"}>Antares ED</Link>
                    <Link to={"Servicios"}>Servicios</Link>
                    <Link to={"Tecnologia"}>Tecnologia</Link>

                </div>
                <div className="Options">
                    <Link to={"Tienda"}>Tienda</Link>
                    <Link to={"Contacto"}>Contacto</Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar