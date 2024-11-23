// Styles
import "./AntaresTech.css"


// Components
import NavBar from "../../components/NavBar"
import Carrusel from "../../components/Carrusel"
import Footer from "../../components/Footer"
import Formulario from "../../components/Formulario"

// Assets
import LogoAT from "../../assets/logos/antares_tech_logo_blanco.webp"

// Data
import first_cards from '../../db/first_cards';


function AntaresTech () {
    return (
        <>
            <header className="hero_AT">
                <NavBar />
                <div className="logo_AT">
                    <img src={LogoAT} alt="Logo_AT" />
                </div>
                <h1>Creando el futuro de la industria</h1>
                <h3>Innovación para la evolución de tu industria al ritmo de la tecnología</h3>
                <div className="blur"></div>
            </header>
            
            <main>
                <section className="first-cards">
                    <Carrusel data={first_cards}/>
                </section>
                <Formulario />
            </main>
            <Footer />
        </>
    )
}

export default AntaresTech