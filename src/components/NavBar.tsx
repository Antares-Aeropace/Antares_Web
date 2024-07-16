import { Link } from "react-router-dom"
import "../styles/components/NavBar.css"
import Logo from "../assets/Antares_logo.png"

const NavBar = () => {
    return (
        <nav className="NavBar">
            <div className="container Nav_layout">
                <Link to={"/"} className="Logo">
                    <img src={Logo} alt="Logo"/>
                </Link>
                <div className="Options">
                    <Link to={"nosotros"}>Nosotros</Link>
                    <Link to={"antares-aerospace"}>Antares Aerospace</Link>
                    <Link to={"antares-ed"}>Antares ED</Link>
                    <Link to={"antares-tech"}>Antares Tech</Link>

                </div>
                <div className="Options">
                    <Link to={"store"}>Tienda</Link>
                    <Link to={"contact"}>Contacto</Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar