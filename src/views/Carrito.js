import ItemCart from '../componentes/ItemCart/ItemCart';
import {useContext} from 'react'
import CartContext from "../componentes/Context/CartContext"
import './Carrito.css'
import {Link} from 'react-router-dom';

const Carrito = () => {

const {items, total, limpiar} = useContext(CartContext)

    return(
        <>
        <div className="CartList">
            {items.map(item =><ItemCart card = {item}/>)}
        </div>
        {items.length > 0 ? 
        
        <div className="accionesCarrito">
            <p className="precioTotal">Total a pagar : ${total}</p>
            <div className="botonesCarrito">
                <Link to="/Shop" style={{ textDecoration: 'none' }}><p><button type="button" className="botonPagar">Ir a pagar</button></p></Link>
                <p><button type="button" className="botonLimpiar" onClick={limpiar}>Limpiar Carrito</button></p>
            </div>
        </div>

        : 

        <div className="nadaCarrito">
            <div className="nadaCarritoBox">
                <p className="nadaCarritoMsj">Aún no tienes nada en el carrito</p>
                <Link to="/Productos" style={{ textDecoration: 'none' }}>
                    <div className="irAComprar">
                        <button type="button" className="botonComprar">Ir a comprar</button>
                    </div>
                </Link>
            </div>
        </div>
        }
        </>

    )
}

export default Carrito