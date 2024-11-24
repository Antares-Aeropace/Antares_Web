// Styles
import "./Antares_ED.css"

// Components
import NavBar from "../../components/NavBar"
import Carrusel from "../../components/Carrusel"
import Footer from "../../components/Footer"

// Assets
import Logo_AE from "../../assets/Antares_ED/Logo_AE.png"
import Rectangle from "../../assets/Antares_ED/Rectangle_negro.svg"
import Servicios_1 from "../../assets/Antares_ED/Servicios_01.svg"
import Servicios_2 from "../../assets/Antares_ED/Servicios_02.svg"
import Servicios_3 from "../../assets/Antares_ED/Servicios_03.svg"
import Servicios_4 from "../../assets/Antares_ED/Servicios_04.svg"
import Servicios_5 from "../../assets/Antares_ED/Services_05.svg"
import Servicios_6 from "../../assets/Antares_ED/Servicios_06.svg"
import Servicios_7 from "../../assets/Antares_ED/Servicios_07.svg"
import Servicios_8 from "../../assets/Antares_ED/Servicios_08.svg"
import Servicios_9 from "../../assets/Antares_ED/Servicios_09.svg"
import Servicios_10 from "../../assets/Antares_ED/Servicios_10.svg"
import Servicios_11 from "../../assets/Antares_ED/Servicios_11.svg"
import Servicios_12 from "../../assets/Antares_ED/Servicios_12.svg"


function Antares_ED (){
    return(
        <>
            <header className="header_AE">
                <NavBar />
                <div className="logo_ae">
                    <img src={Logo_AE} alt="Logo_AE" />
                </div>
                <h1 className="title_AE">Llevándote al siguiente nivel</h1>
                <h3 className="subtitle_AE">productos educativos y cursos a medida de tus necesidades</h3>
        
            </header>
            <div className="img_rectangulo">
                <img src={Rectangle} alt="rectangulo-negro" />
            </div>

            <section className="first-cards">
                <Carrusel />    
            </section>
            
            <section className="capacitacion" >

                <div id="cont-1" className="capacitacion-container">
                    <div className="text-section">
                        <h1>Programas de Capacitación</h1>
                        <p>Nuestros programas están diseñados para habilitar y potenciar las competencias de tu organización, partiendo de tus necesidades específicas para así maximizar el desempeño de tu equipo, fomentar una cultura organizacional motivada y así tener un impacto positivo directo en tu rentabilidad y competividad.</p>
                    </div>    
                </div>
                <div className="content-row">
                    <img src={Servicios_1} alt="img_servicios_1" />
                    <img src={Servicios_2} alt="img_servicios_2" />
                    <img src={Servicios_3} alt="img_servicios_3" />
                    <img src={Servicios_4} alt="img_servicios_4" />

                </div>
            </section>

            <section className="capacitacion">
                
                <div id="cont-2" className="capacitacion-container">
                    <div className="text-section">
                        <h1>Cursos a medida</h1>
                        <p>Sabemos que cada industria tiene requerimientos únicos, por lo que trabajamos de la mano contigo para satisfacer tus necesidades de formación. Abordamos de forma personalizada los desafíos específicos de cada campo con el fin de mejorar las competencias técnicas, operativas y de liderazgo que busques potenciar en pro del crecimiento y competencia de tu empresa.</p>
                    </div>
                </div>
                <div className="content-row">
                    <img src={Servicios_5} alt="img_servicios_1" />
                    <img src={Servicios_6} alt="img_servicios_2" />
                    <img src={Servicios_7} alt="img_servicios_3" />
                    <img src={Servicios_8} alt="img_servicios_4" />

                </div>
            </section>

            <section className="capacitacion">

                <div id="cont-3" className="capacitacion-container">
                    <div className="text-section">
                        <h1>Conferencias</h1>
                        <p>Ofrecemos también conferencias especializadas acordes a tu industria o evento corporativo brindando contenidos relevantes, actualizados y de alto impacto. Ya sea un evento corporativo, una feria industrial o una conferencia a gran escala, buscamos inspirar, educar y fomentar el intercambio de ideas asegurando un valor añadido en cada conferencia.</p>
                    </div>
                </div>
                <div className="content-row">
                    <img src={Servicios_9} alt="img_servicios_1" />
                    <img src={Servicios_10} alt="img_servicios_2" />
                    <img src={Servicios_11} alt="img_servicios_3" />
                    <img src={Servicios_12} alt="img_servicios_4" />

                </div>
            </section>

            <section className="formulario">
                <h1>¿Quieres conocer más de nuestros servicios educativos?</h1>
                <div className="divisor-bottom-line"></div>
            </section>

            <Footer />
        </>
    )
}
export default Antares_ED