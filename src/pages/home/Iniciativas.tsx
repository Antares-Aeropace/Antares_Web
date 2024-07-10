import Card from "../../components/Card"
import Antareres_Aerospace from "../../assets/home/antares_team.webp"
import Antares_Tech from "../../assets/home/programa_tecnologico.webp"
import Antares_Ed from "../../assets/home/antares_ed_confer.webp"

const Iniciativas_Data = [
    {
        title: "Antares Aerospace",
        text_card: "Donde nos dedicamos al desarrollo de toda la tecnología implicada en los distintos sistemas espaciales que diseñamos, desarrollamos y manufacturamos.",
        btn_text: "Conoce más",
        img: Antareres_Aerospace
    },
    {
        title: "Antares Tech",
        text_card: "Donde extendemos las capacidades de desarollo de tecnología del equipa a más industrias donde se requireran servicios de ingeniería de punta 100% mexicana.",
        btn_text: "Conoce más",
        img: Antares_Tech
    },
    {
        title: "Antares Ed",
        text_card: "Donde ofrecemos servicios educativos de divilgación STEAM, capacitación especializada y cursos a la sociedad impulsando la formación hnos dedicamos al desarrollo de toda la tecnología implicada en los distintos sistemas espaciales que diseñamos, desarrollamos y manufacturamosumana en tecnología y ciencias básicas.",
        btn_text: "Conoce más",
        img: Antares_Ed
    }
]

const Iniciativas = () => {
    return (
        <section className="container iniciativas">
            <h1 className="inicativas-title">Nuestras inicativas</h1>

            <div className="iniciativas-content">
                {
                    Iniciativas_Data.map( ({title, img, text_card, btn_text}) => 
                        <Card title={title} img={img} text_card={text_card} btn_text={btn_text} key={title}/>
                    )
                }
            </div>
        </section>
    )
}

export default Iniciativas