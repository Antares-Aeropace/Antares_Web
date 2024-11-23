import "../styles/components/Formulario.css"

function Formulario() {
    return (
        <div className="formulario">
            <form >
                <h2>Contáctanos</h2>
                <input type="text" placeholder="NOMBRE" />
                <input type="text" placeholder="COMPAÑÍA" />
                <input type="text" placeholder="PUESTO" />
                <input type="email" placeholder="CORREO" />
                <input type="tel" placeholder="TELÉFONO" />
                <textarea placeholder="MENSAJE" />
                <button className="btn-secundario" formAction="submit">Enviar mensaje</button>
            </form>
        </div>

    )
}

export default Formulario;