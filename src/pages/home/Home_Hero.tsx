import Button from "../../components/Button"
import NavBar from "../../components/NavBar"
import Section from "../../components/Section"

const Home_Hero = () => {
    return (
        <header className="Hero">
            <NavBar />
            <div className="shadow-box hero-box"></div>
            <Section side={false}>
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
            </Section>
        </header>
    )
}

export default Home_Hero