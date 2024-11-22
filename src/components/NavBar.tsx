import { Link } from "react-router-dom"
import "../styles/components/NavBar.css"

import Logo from "../assets/Antares_logo.png"
import Menu from "../assets/menu.png"

const NavBar = () => {
    return (
        <nav className="NavBar">
            <div className="container Nav_layout">
                <Link to={"/"} className="Logo">
                    <img src={Logo} alt="Logo"/>
                </Link>

                <div className="divisor_line"></div>

                <button className="menu-btn">
                    <img src={Menu} alt="Menu" />
                </button>
                
                <div className="Options">
                    <Link to={"nosotros"}>Nosotros</Link>
                    <Link to={"antares-aerospace"}>Antares Aerospace</Link>
                    <Link to={"antares-ed"}>Antares ED</Link>
                    <Link to={"antares-tech"}>Antares Tech</Link>
                    <Link to={"store"}>Tienda</Link>
                    <Link to={"contact"}>Contacto</Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar