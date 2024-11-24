// Styles 
import "../AA/Antares_Aerospace.css"
// Components
import NavBar from "../../components/NavBar"
import Card_AA from "../../components/Card_AA"
import Footer from "../../components/Footer"

//Assets
import Logo from "../../assets/AA/Logo_Antares_Aerospace.svg"
import Matriz_Capacidades from "../../assets/AA/Temporal_Capacidades_Aeroespaciales.svg"
import Genesis_1 from "../../assets/AA/genesis_1.svg"
import Genesis_2 from "../../assets/AA/genesis_2.svg"
import Genesis_3 from "../../assets/AA/genesis_3.svg"
import Genesis_4 from "../../assets/AA/genesis_4.svg"
import Satelite_1 from "../../assets/AA/satelite_1.svg"
import Satelite_2 from "../../assets/AA/satelite_2.svg"
import Satelite_3 from "../../assets/AA/satelite_3.svg"
import Satelite_4 from "../../assets/AA/satelite_4.svg"
import Satelite_5 from "../../assets/AA/satelite_5.svg"
import Product_1 from "../../assets/AA/productos_AA_1.svg"
import Product_2 from "../../assets/AA/productos_AA_2.svg"
import Product_3 from "../../assets/AA/productos_AA_3.svg"
import Product_4 from "../../assets/AA/productos_AA_4.svg"
import Product_5 from "../../assets/AA/productos_AA_5.svg"
import Product_6 from "../../assets/AA/productos_AA_6.svg"
import Product_7 from "../../assets/AA/productos_AA_7.svg"
import Product_8 from "../../assets/AA/productos_AA_8.svg"
import Formulario from "../../components/Formulario"

// Data
import Objetivos_AA from "../../db/Objetivos_AA"

const AA = () => {
    return(
        <>
            <header className="header-AA">
                <NavBar />
                <div className="logo-AA">
                    <img src={Logo} alt="Logo-AA" />
                </div>
                <h1 className="title-AA">Soluciones espaciales a medida</h1>
                <h3 className="subtitle-AA">¡Conoce todo lo que Antares Aerospace puede hacer por ti!</h3>

                <div className="aerospatial-opt">
                    <img src={Matriz_Capacidades} alt="Matriz_temporal_capacidades" />
                </div>
                <div className="gradient-AA">
                    <h2 className="title-section-AA">Objetivos Clave</h2>
                </div>
            </header>
            
            <main className="container">

            <section>
                <div className="divisor-bottom-line-AA-objetivos"></div>
                <div className="objetivos-clave-grid">
                    {
                        Objetivos_AA.map( item => (
                        <Card_AA text_card={item.text_card} img={item.img} key={item.id}/>
                    ))
                     }
                </div>


            </section>

            <section className="genesis-section">

                <h2 className="title-section-AA">Proyectos</h2>
                <div className="divisor-bottom-line-AA"></div>
                <h2 id="subtitle-1" className="title-section-AA">El espacio es nuestra pasión, alcanzarlo juntos es nuestra misión.</h2>

                <img id="img-gen-3" src={Genesis_3} alt="img_genesis_3" />

                <div className="genesis-section-data">
                    <div id="data-no-movil" className="fotos-column">
                        <img src={Genesis_1} alt="img_genesis_1" />
                        <img src={Genesis_2} alt="img_genesis_2" />
                    </div>
                    <div className="info-genesis">
                        <div className="encabezado-section">
                            <div  className="divisor-bottom-line-AA-objetivos"></div>
                            <img id="img-gen" src={Genesis_4} alt="img_genesis_4" />
                            <div  className="divisor-bottom-line-AA-objetivos"></div>
                        </div>
                        <h2 id="title-gen" className="title-section-AA">Lanzador Suborbital Génesis</h2>
                        <p id="description-gen">El primer lanzador suborbital diseñado y desarrollado en México con capacidad de carga de hasta 50 kilogramos para llevar tu misión, proyecto y/o producto al espacio.</p>
                        
                        <div className="grid-gen">
                            <p id="data-no-movil">CARGA ÚTIL</p>
                            <p>20-50 kg</p>
                        </div>
                        <div id="div-sat-1" className="divisor-bottom-line-AA"></div>
                        <div className="grid-gen">
                            <p id="data-no-movil">IMPULSO TOTAL</p>
                            <p>4000 kNs</p>
                        </div>
                        <div id="div-sat-1" className="divisor-bottom-line-AA"></div>
                        <div className="grid-gen">
                            <p id="data-no-movil">ALTURA TOTAL</p>
                            <p>8.5-12 m</p>
                        </div>
                        <div id="div-sat-1" className="divisor-bottom-line-AA"></div>
                        <div className="grid-gen">
                            <p id="data-no-movil">VELOCIDAD</p>
                            <p>5-10 G</p>
                        </div>
                        <div id="div-sat-1" className="divisor-bottom-line-AA"></div>
                        <div className="grid-gen">
                            <p id="data-no-movil">ETAPAS</p>
                            <p>1 - 3etapas</p>
                        </div>

                        <button className="button-conoce-mas">Conoce más sobre Génesis</button>
                    </div>
                </div>
            </section>

            <section className="misiones-sat">
                    <div id="info-satelites" className="info-genesis">
                        <div id="encabezado-sat" className="encabezado-section">
                            <div  className="divisor-bottom-line-AA-objetivos"></div>
                            <img id="img-sat" src={Satelite_1} alt="img_genesis_4" />
                            <div  className="divisor-bottom-line-AA-objetivos"></div>
                        </div>
                        <h2 id="title-sat" className="title-section-AA">Misiones Satélitales</h2>
                        <p id="description-gen">Desarrollamos los diversos segmentos de una misión satélital abarcando desde el segmento espacial en órbita al segmento en tierra del lado del cliente, comando y comunicaciones.</p>
                    
                    </div>
                    <img id="img-sat-2" src={Satelite_2} alt="img_sat_2" />
                


                    <div className="main-grid">
                        <div className="grid-sat">
                            <p id="data-no-movil">MISIÓN</p>
                            <p>Antares B3U</p>
                            <p>Antares A6U</p>
                        </div>
                        <div id="div-sat-1" className="divisor-bottom-line-AA-objetivos"></div>


                        <div className="grid-sat">
                            <p id="data-no-movil">RESOLUCIÓN ESPACIAL</p>
                            <p>30-40 m/píxel</p>
                            <p>0.4-5 m/píxel</p>
                        </div>
                        <div id="div-sat-1" className="divisor-bottom-line-AA-objetivos"></div>


                        <div className="grid-sat">
                            <p id="data-no-movil">RESOLUCIÓN CÁMARA</p>
                            <p>8-12 Mpx</p>
                            <p>20 Mpx</p>
                        </div>
                        <div id="div-sat-1" className="divisor-bottom-line-AA-objetivos"></div>


                        <div className="grid-sat">
                            <p id="data-no-movil">TIEMPO DE VIDA</p>
                            <p>3-5 años</p>
                        </div>
                        <div id="div-sat-1" className="divisor-bottom-line-AA-objetivos"></div>


                        <div className="grid-sat">
                            <p id="data-no-movil">TIPO DE ÓRBITA</p>
                            <p>550 km SSO</p>
                        </div>
                    </div>
                    <div className="satelites-column-img">
                        <img id="img-sat-3" src={Satelite_3} alt="img_sat_3" />
                        <img id="img-sat-3" src={Satelite_4} alt="img_sat_4" />

                    </div>
                

                
            </section>
            
            <section id="cotiza-mision-epacial" className="misiones-sat-2">
                <img id="img-sat-5" src={Satelite_5} alt="img_sat_5" />
                <div className="cotiza-sat">
                    <h2 id="title-cotiza" className="title-section-AA">Cotiza tu misión satelital o módulos satelitales</h2>
                    <p id="description-gen">Ya sea querer impulsar el desarrollo, promover tu marca en el espacio, comercializar imágenes satelitales, validar tecnología, proveer servicios o estudiar la Tierra, una vez identificada la misión podremos ver cómo suma la tecnología satelital a tu empresa, proyecto, estudio u organización.</p>
                    <button className="button-conoce-mas">Conoce nuestras misiones satélitales</button>

                </div>
            </section>


            <section id="product-section" className="misiones-sat-2">
                    <div className="div-prod-column">
                    <img id="img-sat-5" src={Product_1} alt="product_1" />
                    <img id="img-sat-5" src={Product_3} alt="product_3" />

                    </div>
                    <div className="productos-tech">
                        <div id="encabezado-product" className="encabezado-section">
                            <div className="divisor-bottom-line-AA-objetivos"></div>
                            <img  id="img-prod-2" src={Product_2} alt="product_2" />
                            <div  className="divisor-bottom-line-AA-objetivos"></div>    
                        </div>

                        <h2 id="title-cotiza" className="title-section-AA">Productos y Tecnologías Aeroespaciales a medida</h2>
                        <p id="description-gen">Sea cual sea tu industria, contamos con un equipo altamente especializado y diverso con experiencia en el desarrollo de productos innovadores y tecnologías avanzadas. Desde la concepción hasta la implementación trabajamos de la mano contigo para crear soluciones garantes de calidad, fiabilidad y máximo valor para ti.</p>
                        <button className="button-conoce-mas">Explora nuestras capacidades a medida</button>
                        <div className="grid-img">
                        <img src={Product_4} alt="product_4" />
                        <img src={Product_5} alt="product_5" />
                        <img src={Product_6} alt="product_6" />

                        </div>
                    </div>
                    
            </section>

            <section className="section-prod-7">
                        <img  src={Product_7} alt="product_7" />
            </section>

            <section className="section-prod-7">
                <h2 className="title-section-AA">Desarrollamos tu solución </h2>
                <div className="divisor-bottom-line-AA"></div>
                    <img src={Product_8} alt="" />
                <div id="dev-soluciones" className="misiones-sat">
                    <p id="description-gen">No importa cuál sea tu reto, Antares Aerospace tiene la capacidad para integrar y desarrollar la tecnología que te dará la competitividad que necesitas o bien el producto que empatará tu idea en el mundo real.</p>
                    <button  className="button-conoce-mas">Nuestro Ciclo de Desarrollo</button>

                </div>
            </section>

            <section>
                <div className="divisor-bottom-line-AA"></div>
                
                <Formulario />
            </section>


            </main>
            <Footer />



        </>
    )
}
export default AA