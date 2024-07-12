import "../../styles/Home.css"

// Components
import NavBar from "../../components/NavBar"
import Button from "../../components/Button"
import Card from "../../components/Card"

// Assets
import Logo_a from "../../assets/home/antares_logo_solo_a.webp"
import Logo from "../../assets/Antares_logo.png"
import Logo_tech from "../../assets/home/antares_tech_bbwl.webp"

// Data for projects
import Iniciativas_Data from "../../db/Iniciativas"

const Home = () => {
    return (
        <>
            <header className="hero">
                <NavBar />
                <div className="hero-content container">
                    <div>
                        <h1>Impulsando el sector espacial en LATAM</h1>
                        <p>
                            En Antares Aerospace desarrollamos tecnologia espacial 100%
                            mexicana, brindando servicios de ingenieria y educativos en pro
                            de un autentico sector espacial en Mexico.
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
                            <h1>Tenemos la capacidad para integrar y desarrollar tecnologia</h1>
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
                                Render Mision Lanzador Suborbital Genesis.
                                Proyeccion de Lanzamiento 2026.
                            </p>
                        </div>
                        <div>
                            <img src={Logo} alt="Logo Antares Aerospace" className="home-section-2-logo"/>
                            <h1>Diseña con nosotros tu mision</h1>
                            <p>
                                Explora las soluciones de vanguardia que la industria espacial
                                trae para ti como gobierno, industria, academia, empresa y mas.
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
                                para integrar y desarrollar la tecnologia que te dara 
                                la competitividad que necesitas o bien el producto
                                que empatara tu idea con el mundo real
                            </p>
                            <Button text={"Explora nuestros servicios"} />
                        </div>
                        <div className="home-section-3-content-rigth">
                            <img src={Logo_tech} alt="Antares Technologies" />
                        </div>
                    </div>
                    <div className="shadow-box-darker"></div>
                </section>

            </main>
            <footer>

            </footer>
        </>
    )
}

export default Home