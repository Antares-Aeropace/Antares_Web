import Button from "../../components/Button"
import Section from "../../components/Section"
import Antares_A from "../../assets/home/antares_logo_solo_a.webp";

const Home_Section_1 = () => {
    return (
        <section className="home-section-1">
            <img src={Antares_A} alt="logo" className="logo-section-1"/>
            <div className="shadow-box hero-box"></div>
            <Section side={true}>
                <h1>¡Tenemos la capacidad para integrar y desarrollar tecnología!</h1>
                <Button text={"Nuestras capacidades"} />
            </Section>
        </section>
    )
}
export default Home_Section_1