// Styles
import "./Home.css"

// Components
import NavBar from "../../components/NavBar"
import Button from "../../components/Button"
import Card from "../../components/Card"
import Footer from "../../components/Footer"


// Assets
import Logo_a from "../../assets/home/antares_logo_solo_a.webp"
import Logo from "../../assets/logos/LogoAntares.svg"
import Logo_tech from "../../assets/logos/antares_tech_bbwl.webp"

// Data for projects
import Iniciativas_Data from "../../db/Iniciativas"


const Home = () => {
    return (
        <>
            <header className="hero">
                <NavBar />
                <div className="hero-content container">
                    <div>
                        <img src={Logo_a} alt="Logo" className="Logo_a_header"/>
                        <h1 className="hero-content-title">Impulsando el sector espacial en LATAM</h1>
                        <p className="hero-content-text">
                            En Antares Aerospace desarrollamos tecnología espacial 100%
                            mexicana, brindando servicios de ingeniería y educativos en pro
                            de un auténtico sector espacial en México.
                        </p>
                        <button className="btn-secondary btn-mobile"> Nuestras iniciativas</button>
                        <button className="btn btn-hero-home">Sobre nosotros</button>
                    </div>
                    <div></div>
                </div>
                <div className="shadow-box"></div>
            </header>
            <main>

                <section className="home-section-1">
                    <div className="home-section-1-content container">
                        <div></div>
                        <div>
                            <img src={Logo_a} alt="Logo" className="Logo_a"/>
                            <h1>Tenemos la capacidad para integrar y desarrollar tecnología</h1>
                            <Button text={"Nuestras capacidades"} />
                        </div>
                    </div>
                    <div className="shadow-box"></div>
                </section>

                <section className="container iniciativas">
                    <h1 className="inicativas-title">Nuestras inicativas</h1>
                    <div className="iniciativas-content">
                        {
                            Iniciativas_Data.map( item => (
                                <Card img={item.img} text_card={item.text_card} title={item.title} btn_text={item.btn_text} key={item.id}/>
                            ))
                        }
                    </div>
                </section>

                <section className="home-section-2">
                    <div className="home-section-2-content container">
                        <div>
                        </div>
                        <div className="home-section-2-description">
                            <img src={Logo} alt="Logo Antares Aerospace" className="home-section-2-logo"/>
                            <h1>Diseña con nosotros tu misión</h1>
                            <p>
                                Explora las soluciones de vanguardia que la industria espacial
                                trae para ti como gobierno, industria, academia, empresa y más.
                            </p>
                            <Button text={"Explora nuestros servicios"} />
                        </div>
                    </div>
                    <div className="shadow-box"></div>
                </section>

                <section className="home-section-3">
                    <div className="home-section-3-content container">
                        <div className="home-section-3-content-left">
                            <h1>Asumimos que es posible</h1>
                            <p>
                                No importa cual sea tu reto, tenemos la capacidad
                                para integrar y desarrollar la tecnología que te dará 
                                la competitividad que necesitas o bien el producto
                                que empatará tu idea con el mundo real.
                            </p>
                            <Button text={"Explora nuestros servicios"} />
                        </div>
                        <div className="home-section-3-content-rigth">
                            <img src={Logo_tech} alt="Antares Technologies" />
                        </div>
                    </div>
                    <div className="shadow-box-darker"></div>
                </section>

                {/* <section className="home-projects">
                    <div className="home-projects-content container">
                        <h2 className="home-projects-title">Experiencias y proyectos</h2>
                        <div className="home-projects-list" >
                            {
                                Proyectos.map(item => (
                                    <ProjectCard title={item.title} img={item.img} text={item.text} key={item.id} />
                                ))
                            }
                        </div>
                    </div>
                    <div className="shadow-box"></div>
                </section> */}

            </main>
            <Footer />
        </>
    )
}

export default Home