// Styles
import "./Nosotros.css"

// Components
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"

// Assets
import Logo from "../../assets/logos/LogoAntares.svg"
import LogoTech from "../../assets/logos/antares_tech_bbwl.webp"
import LogoED from "../../assets/logos/logo_educativa.webp"
import Genesis from "../../assets/nosotros/Proyectos/ServiciosAntares.png"
import Genesis_2 from "../../assets/nosotros/Proyectos/Genesis_2.png"
import Genesis_3 from "../../assets/nosotros/Proyectos/Genesis_3.png"
import Dispensador from "../../assets/nosotros/Proyectos/Dispensador.png"
import Signal from "../../assets/nosotros/Proyectos/signal.png"

function Nosotros() {
    return (
        <>
            <header className="hero-nosotros">
                <NavBar />
                <div className="hero-content-nosotros container">
                    <img src={Logo} alt="logo Antares" className="hero-logo-nosotros" />
                </div>
            </header>
            <main>
                <section className="nosotros-iniciativas container">
                    <div className="nosotros-genesis">
                        <div className="nosotros-genesis-text">
                            <h1>Nosotros somos Antares Aerospace</h1>
                            <span>El espacio es pasión, alcanzarlo juntos nuestra misión</span>
                            <hr></hr>
                            <p>
                                En Antares estamos cambiando la historia que nos contamos,
                                siendo una de las startups punteras en el desarrollo de
                                tecnología espacial 100% mexicana conciliando un ecosistema
                                de desarrollo de tecnología y servicios de ingeniería que nos
                                permitan crecer como región, dar apertura al mercado espacial
                                en Latinoamérica y llegar a las estrellas.
                            </p>
                            <p>
                                Comenzamos en 2016 como un grupo de entusiastas de las tecnologías
                                aeroespaciales que eventualmente comenzó a expandirse en capacidades
                                y recursos hasta llegar a ser lo que somos hoy en nuestras diversas
                                iniciativas: Antares Aerospace, Antares Technologies y Antares Education.
                            </p>
                        </div>

                        <div>
                            <img src={Genesis} />
                        </div>
                    </div>

                    <div className="nosotros-genesis-2">

                        <div>
                            <img src={Genesis_2} alt="genesis" />
                            <img src={Genesis_3} alt="genesis" />
                        </div>

                        <div className="nosotros-genesis-2-text">
                            <img src={Logo} alt="Logo" />
                            <hr></hr>
                            <p>
                                En Antares Aerospace nos centramos en desarrollar todas las tecnologías
                                estratégicas para llegar al espacio, dando así apertura al mercado espacial en
                                México y en Latinoamérica.
                            </p>
                            <p>
                                Buscando con ello proveer las necesidades regionales en tecnologías de lanzadores,
                                infraestructura y microsatélites, buscando así siempre ser actores clave en el desarrollo
                                aeroespacial del país.
                            </p>

                            <button className="btn-secundario">Conoce mas sobre Antares Aerospace</button>
                        </div>

                    </div>

                    <div className="nosotros-tecnologies">
                        <div className="nosotros-tecnologies-text">
                            <img src={LogoTech} alt="AntaresTechDev" className="logo-techdev" />
                            <hr></hr>
                            <p>
                                En Antares Technologies nos enfocamos al desarrollo de productos y
                                servicios en cualquier industria, conciliando así el desarrollo de tecnología 100%
                                mexicana en pro de un crecimiento tanto nacional como regional.
                            </p>
                            <p>
                                Teniendo así la capacidad para desarrollar e integrar tecnologías que te darán el
                                crecimiento y competitividad que necesitas o bien el producto que empate tu idea con el mundo real
                            </p>
                            <button className="btn-secundario">Conoce más sobre nuestras soluciones</button>
                        </div>
                        <img src={Dispensador} alt="" />
                    </div>

                    <div className="nosotros-educativo">
                        <img src={Signal} alt="signal" />

                        <div className="nosotros-educativo-text">
                            <img src={LogoED} alt="Logo ED" />
                            <hr></hr>
                            <p>
                                Antares Education por su parte nace de la experiencia adquirida en torno a la 
                                formación y crecimiento de talento interno. Buscando conciliar con esto ofrecer tales capacidades de formación a diversos clientes en diversas industrias.
                            </p>
                            <p>
                                Generando cursos, brindando conferencias y diseñando 
                                programas de capacitación a medida de tus necesidades como
                                 empresa o colaborador.
                            </p>
                            <button className="btn-secundario">Conoce nuestros servicios educativos</button>
                        </div>
                    </div>

                </section>
            </main>

            <Footer />
        </>
    )
}

export default Nosotros