import Button from "./Button"
import "../styles/components/Card.css"

type Props = {
    title: string,
    text_card: string,
    btn_text: string,
    img: string, 
}

const Card = ({title, text_card, btn_text, img}:Props) => {
    return (
        <div className="Card">
            <img src={img} alt="Imagen"/>
            <div className="content">
                <h2>{title}</h2>
                <p>{text_card}</p>
                <Button text={btn_text} />
            </div>
        </div>
    )
}

export default Card