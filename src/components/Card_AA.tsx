// Styles
import "../styles/components/Card_AA.css"


type Props = {
    text_card: string,
    img: string, 
}

const Card_AA = ({text_card, img}: Props) => {
    return ( 
        <><div className="container-card-aa">
            <img src={img} alt="Imagen"/>
            <div className="content_AA">
                <h2>{text_card}</h2>
            </div>
        </div>
            
        </>
    )
}
export default Card_AA