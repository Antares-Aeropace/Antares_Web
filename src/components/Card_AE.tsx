// Styles
import "../styles/components/Card_AE.css"


type Props = {
    title: string,
    img: string, 
}

const Card_AE = ({title, img}: Props) => {
    return ( 
        <>
            <div className="content_AE">
                <img src={img} alt="Imagen"/>
                <h2>{title}</h2>
            </div>
        </>
    )
}
export default Card_AE