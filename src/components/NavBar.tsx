import { Link } from "react-router-dom"
import "../styles/components/NavBar.css"

import Logo from "../assets/logos/LogoAntares.svg"
import Menu from "../assets/menu.png"

const NavBar = () => {



    return (
        <nav className="NavBar"
            onScroll={()=>console.log("Scroll")}
        >
            <div className="container Nav_layout">
                <Link to={"/"} className="Logo">
                    <img src={Logo} alt="Logo"/>
                </Link>

                <button className="menu-btn">
                    <img src={Menu} alt="Menu" />
                </button>
                
                <div className="Options">
                    <Link to={"nosotros"}>Nosotros</Link>
                    <Link to={"antares-aerospace"}>Iniciativas</Link>
                    <Link to={"antares-ed"}>Soluciones</Link>
                    <Link to={"antares-tech"}>Servicios</Link>

                </div>
                <div className="Options">
                    <Link to={"contact"}>Contacto</Link>
                </div>


            </div>
        </nav>
    )
}

export default NavBar