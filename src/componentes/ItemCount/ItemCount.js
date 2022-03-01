import './ItemCounter.css';
import {useState, useContext} from "react"
import CartContext from "../Context/CartContext"


const ItemCount = ({valorInicial, stock, item}) => {

    const [mensaje, setMensaje] = useState("")

    const [quantity,setQuantity] = useState(valorInicial)

    const {añadir} = useContext(CartContext)

    function sumar(){

        if (quantity < stock){
            setQuantity(quantity +1)
        } else {
            setMensaje('No hay mas stock')
            setTimeout(()=>{
                setMensaje("")
            },3000)
        }
    }

    function restar(){
        if (quantity > valorInicial){
        setQuantity(quantity -1)
        } else {
        setMensaje('No podes tener menos de un producto')
        setTimeout(()=>{
            setMensaje("")
            },3000)
        }
    }   

function agregar(){
    añadir(quantity, item)
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
            <div className="AñadirCarrito">
                <button type="button" onClick={agregar} className="botonCarrito">Añadir al carrito</button>
            </div>
            <div className="ad">
                <p className="advertencia">{mensaje}</p>
            </div>
        </>
            
    )
}

export default ItemCount


