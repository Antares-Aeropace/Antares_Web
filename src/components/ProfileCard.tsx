type Props = {
    nombre: string,
    cargo: string,
    img: string, 
}

function ProfileCard ({nombre, cargo, img}: Props) {
    return (
        <div>
            <img src={img} alt="profile photo" />
            <h3>{nombre}</h3>
            <p>{cargo}</p>
        </div>
    )
}

export default ProfileCard