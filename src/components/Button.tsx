import "../styles/components/Button.css"

const Button = ({text}:{text: String}) => {
    return (
        <button className="btn">{text}</button>
    )
}

export default Button