// React components 
import { Link } from "react-router-dom"

// Assets 
import Logo_a from "../assets/home/antares_logo_solo_a.webp"

// Styles
import "../styles/components/Footer.css"

const Footer = ()=> {
    return (
        <footer className="footer">
            <div className="footer-content container">
                <img src={Logo_a} alt="Logo Antares" className="footer-logo"/>

                <div className="footer-content-list">
                    <h3>INICIATIVAS</h3>
                    <Link to={"Nosotros"}>Nosotros</Link>
                    <Link to={"Iniciativas"}>Antares Aerospace</Link>
                    <Link to={"Iniciativas"}>Antares ED</Link>
                    <Link to={"Antares Tech"}>Antares Tech</Link>
                </div>
                <div className="footer-content-list">
                    <h3>REDES SOCIALES</h3>
                    <Link to={"https://www.facebook.com/AntaresSpaceTeam/"}>Facebook</Link>
                    <Link to={"https://www.instagram.com/antaresaerospaceoficial/"}>Instagram</Link>
                    <Link to={"https://www.linkedin.com/company/antares-aerospace-mx/mycompany/"}>Youtube</Link>
                    <Link to={"https://www.youtube.com/@antaresaerospace4191"}>LinkedIn</Link>
                </div>
                <div>
                    <h3>CONTACTO</h3>
                    <p>bussiness@antaresaerospace.com</p>
                    <h1></h1>
                    <p>Políticas de Privacidad</p>
                    <p>Términos de uso</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer