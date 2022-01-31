import './ItemCounter.css';

import {useState} from "react"

const ItemCount = (props) => {

    const [mensaje, setMensaje] = useState("")

    const [quantity,setQuantity] = useState(props.valorInicial)

    function sumar(){

        if (quantity < props.stock){
            setQuantity(quantity +1)
        } else {
            setMensaje('No hay mas stock')
            setTimeout(()=>{
                setMensaje("")
            },3000)
        }
    }

    function restar(){
        if (quantity > props.valorInicial){
        setQuantity(quantity -1)
        } else {
        setMensaje('No podes tener menos de un producto')
        setTimeout(()=>{
            setMensaje("")
        },3000)
    }
    }

    return(
        <>
            <div className="itemCounter">
                <div>
                    <button type="button" onClick={restar} className="boton">-</button>
                </div>
                <div className="quantity">
                    <label>{quantity}</label>
                </div>
                <div>
                    <button type="button" onClick={sumar} className="boton">+</button>
                </div>
            </div>
            <div className="ad">
                <p className="advertencia">{mensaje}</p>
            </div>
        </>
            
    )
}

export default ItemCount