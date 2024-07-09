import Button from "../../components/Button"
import NavBar from "../../components/NavBar"
import "../../styles/Hero.css"

const Home_Hero = () => {
    return (
        <header className="Hero">
            <NavBar />
            <div className="shadow-box hero-box"></div>
            <div className="hero-content container">
                <div>
                    <h1>
                        !Impulsando el sector 
                        espacial en LATAM¡
                    </h1>
                    <p>
                        En Antares Aerospace desarrollamos tecnología espacial 100%
                        mexicana, brindando servicios de ingeniería y educativos en
                        pro de un autentico sector espacial en México
                    </p>
                    <Button text={"Sobre nosotros"}/>
                </div>
                <div></div>
            </div>
        </header>
    )
}

export default Home_Hero