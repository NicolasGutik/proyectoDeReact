import img from "../assets/pico.png"
import './pico.css'

const Pico = () =>{
    return(
        <div className="pico">
            <img src={img} className="imgPico" alt="cargandoPagina"/>
        </div>
    )
}

export default Pico