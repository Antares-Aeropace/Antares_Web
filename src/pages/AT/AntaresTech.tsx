// Styles
import "./AntaresTech.css"


// Components
import NavBar from "../../components/NavBar"
import Carrusel from "../../components/Carrusel"
import Footer from "../../components/Footer"
import Formulario from "../../components/Formulario"

// Assets
import LogoAT from "../../assets/logos/antares_tech_logo_blanco.webp"
import CicloDev from "../../assets/AT/CicloDev.svg"
// Servicios iconos
import Capacidades_1 from "../../assets/AT/Servicios/Capacidades por Solución.svg"
import Capacidades_2 from "../../assets/AT/Servicios/Capacidades por Solución(1).svg"
import Capacidades_3 from "../../assets/AT/Servicios/Capacidades por Solución(2).svg"
import Capacidades_4 from "../../assets/AT/Servicios/Capacidades por Solución(3).svg"
import Capacidades_5 from "../../assets/AT/Servicios/Capacidades por Solución(4).svg"
import Capacidades_6 from "../../assets/AT/Servicios/Capacidades por Solución(5).svg"
import Capacidades_7 from "../../assets/AT/Servicios/Capacidades por Solución(6).svg"
import Capacidades_8 from "../../assets/AT/Servicios/Capacidades por Solución(7).svg"
import Capacidades_9 from "../../assets/AT/Servicios/Capacidades por Solución(8).svg"


// Data
import Servicios from '../../db/Servicios';


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
                    <Carrusel data={Servicios}/>
                </section>

                <section className="container soluciones">
                    <h1 className="soluciones-title" >Desarrollamos tu solución</h1>
                    <hr></hr>
                    <div className="soluciones-content">
                        <img src={CicloDev} alt="Ciclo de desarrollo" />
                        <div className="soluciones-text">
                            <p>
                                No importa cuál sea tu reto, Antares Aerospace tiene la capacidad para integrar y 
                                desarrollar la tecnología que te dará la competitividad que necesitas o bien el producto que 
                                empatará tu idea en el mundo real.
                            </p>
                            <button className="btn-secundario">Nuestro ciclo de desarrollo</button>
                        </div>
                    </div>
                </section>

                <section className="problemas-industria container">
                    <h1>Solucionamos los problemas de la industria</h1>
                    <hr />

                    <div className="soluciones-industria">

                        <div className="solucion container">
                            <img src={Servicios[4].img} alt="solucion" />
                            <div className="solucion-content">
                                <h2>Seguridad y defensa</h2>
                                <p>
                                    Especializados en el desarrollo e implementación de sistemas de seguridad 
                                    tanto físicos como cibernéticos, incluyendo desde la protección de infraestructuras críticas al control 
                                    de acceso avanzado y monitoreo en tiempos real; brindando innovación bajo un enfoque estratégico para estae un 
                                    paso adelante en un entornos de riesgo cada vez más complejos.
                                </p>
                                <div className="solucion-content-icons">
                                    <img src={Capacidades_1} alt="icon-solution"/>
                                </div>
                                <button className="btn-secundario">Explorar más</button>
                            </div>
                        </div>

                        <div className="solucion container">
                            <div className="solucion-content">
                                <h2>Desarrollo de Productos</h2>
                                <p>
                                    Desde la conceptualización a la fabricación te ofrecemos un enfoque integral personalizado a tus necesidades que abarca diseño, 
                                    ingeniería, prototipado y optimización de tu producto sea cual sea tu sector. Trabajamos de la mano contigo para llevar tu producto del 
                                    mundo de las ideas a la realidad utilizando herramientas y metodologías de vanguardia.
                                </p>
                                <div className="solucion-content-icons">
                                    <img src={Capacidades_2} alt="icon-solution"/>
                                </div>
                                <button className="btn-secundario">Explorar más</button>
                            </div>
                            <img src={Servicios[5].img} alt="solucion" />

                        </div>

                        <div className="solucion container">
                            <img src={Servicios[2].img} alt="solucion" />
                            <div className="solucion-content">
                                <h2>Productos digitales</h2>
                                <p>
                                    Transformamos la manera en que tú como organización, empresa o gobierno interactúas con la tecnología y tus usuarios. 
                                    Desde aplicaciones web a móvil basadas en inteligencia artificial y big data, 
                                    ofrecemos un enfoque integral que abarca diseño, desarrollo, implementación y optimización continúa para que tu producto digital 
                                    sea de alto impacto.
                                </p>
                                <div className="solucion-content-icons">
                                    <img src={Capacidades_3} alt="icon-solution"/>
                                </div>
                                <button className="btn-secundario">Explorar más</button>
                            </div>
                        </div>

                        <div className="solucion container">
                            <div className="solucion-content">
                                <h2>Electronica</h2>
                                <p>
                                    Contamos con una amplia experiencia en diseño y desarrollo de soluciones electrónicas y sistemas embebidos eficientes 
                                    en aplicaciones tanto industriales como comerciales. 
                                    Desde su diseño hasta la integración de hardware y 
                                    software ofrecemos soluciones a medida que te dan rendimiento, fiabilidad y escalabilidad en tus productos.
                                </p>
                                <div className="solucion-content-icons">
                                    <img src={Capacidades_4} alt="icon-solution"/>
                                </div>
                                <button className="btn-secundario">Explorar más</button>
                            </div>
                            <img src={Servicios[0].img} alt="solucion" />
                        </div>

                        <div className="solucion container">
                            <img src={Servicios[6].img} alt="solucion" />
                            <div className="solucion-content">
                                <h2>Casa de Software</h2>
                                <p>
                                    Contamos con capacidades diversas en desarrollo de software ya sea soluciones en la nube, 
                                    software embebido, sistemas de gestión empresarial, aplicaciones móviles o plataformas web, 
                                    aseguramos la optimización de procesos, mejorando la experiencia de tus usuarios y posicionando tu 
                                    producto para el presente digital.
                                </p>
                                <div className="solucion-content-icons">
                                    <img src={Capacidades_5} alt="icon-solution"/>
                                </div>
                                <button className="btn-secundario">Explorar más</button>
                            </div>
                        </div>

                        <div className="solucion container">
                            <div className="solucion-content">
                                <h2>Sistemas complejos</h2>
                                <p>
                                    Dado que nuestra experiencia se extiende a diversas industrias hemos trabajado el diseño, 
                                    integración y optimización de sistemas complejos adaptados a necesidades diversas. Es por ello que 
                                    desarrollamos soluciones que gestionan la interconexión de múltiples componentes tecnológicos, procesos 
                                    y datos en tiempo real; garantizando un enfoque interdisciplinario.
                                </p>
                                <div className="solucion-content-icons">
                                    <img src={Capacidades_6} alt="icon-solution"/>
                                </div>
                                <button className="btn-secundario">Explorar más</button>
                            </div>
                            <img src={Servicios[3].img} alt="solucion" />
                        </div>

                        <div className="solucion container">
                            <img src={Servicios[1].img} alt="solucion" />
                            <div className="solucion-content">
                                <h2>Medio Ambiente</h2>
                                <p>
                                    Transformamos la manera en que tú como organización, empresa o gobierno interactúas con la tecnología y tus usuarios. 
                                    Desde aplicaciones web a móvil basadas en inteligencia artificial y big data, ofrecemos un enfoque integral que abarca diseño, 
                                    desarrollo, implementación y optimización continúa para que tu producto digital sea de alto impacto.
                                </p>
                                <div className="solucion-content-icons">
                                    <img src={Capacidades_7} alt="icon-solution"/>
                                </div>
                                <button className="btn-secundario">Explorar más</button>
                            </div>
                        </div>

                        <div className="solucion container">
                            <div className="solucion-content">
                                <h2>Investigación y Desarrollo</h2>
                                <p>
                                    Siendo que la investigación y el desarrollo (I+D) son y han sido pilares del crecimiento de nuestros servicios y 
                                    capacidades de desarrollo de tecnología, a través de un enfoque colaborativo y multidsciplinario ofrecemos I+D para 
                                    abrir nuevas oportunidades de negocio e incluso llegar a las fronteras del conocimiento humano hasta donde tu imaginación lo requiera.
                                </p>
                                <div className="solucion-content-icons">
                                    <img src={Capacidades_8} alt="icon-solution"/>
                                </div>
                                <button className="btn-secundario">Explorar más</button>
                            </div>
                            <img src={Servicios[7].img} alt="solucion" />
                        </div>

                        <div className="solucion container">
                            <img src={Servicios[8].img} alt="solucion" />
                            <div className="solucion-content">
                                <h2>Industria y Manufactura</h2>
                                <p>
                                    Llevamos a cabo la automatización de líneas de producción, la integración de sistemas avanzados de control y 
                                    monitoreo en tiempo real y más. Brindando también el diseño y desarrollo de robots acordes a tus necesidades así como la 
                                    integración completa de los sistemas de gestión en tu industria.
                                </p>
                                <div className="solucion-content-icons">
                                    <img src={Capacidades_9} alt="icon-solution"/>
                                </div>
                                <button className="btn-secundario">Explorar más</button>
                            </div>
                        </div>

                    </div>

                </section>
                <Formulario />
            </main>
            <Footer />
        </>
    )
}

export default AntaresTech