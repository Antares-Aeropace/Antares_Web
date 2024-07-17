// Styles
import "../../styles/Home.css"

// Components
import NavBar from "../../components/NavBar"
import Button from "../../components/Button"
import Card from "../../components/Card"
import Footer from "../../components/Footer"
import ProjectCard from "../../components/ProjectCard"


// Assets
import Logo_a from "../../assets/home/antares_logo_solo_a.webp"
import Logo from "../../assets/Antares_logo.png"
import Logo_tech from "../../assets/home/antares_tech_bbwl.webp"

// Data for projects
import Iniciativas_Data from "../../db/Iniciativas"
import Proyectos from "../../db/Projectos"


const Home = () => {
    return (
        <>
            <header className="hero">
                <NavBar />
                <div className="hero-content container">
                    <div>
                        <h1>Impulsando el sector espacial en LATAM</h1>
                        <p>
                            En Antares Aerospace desarrollamos tecnología espacial 100%
                            mexicana, brindando servicios de ingeniería y educativos en pro
                            de un auténtico sector espacial en México.
                        </p>
                        <Button text={"Sobre nosotros"}/>
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
                            <p className="home-section-2-label">
                                Render Misión Lanzador Suborbital Génesis.
                                Proyección de Lanzamiento 2026.
                            </p>
                        </div>
                        <div>
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
                                que empatará tu idea con el mundo real
                            </p>
                            <Button text={"Explora nuestros servicios"} />
                        </div>
                        <div className="home-section-3-content-rigth">
                            <img src={Logo_tech} alt="Antares Technologies" />
                        </div>
                    </div>
                    <div className="shadow-box-darker"></div>
                </section>

                <section className="home-projects">
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
                </section>

            </main>
            <Footer />
        </>
    )
}

export default Home