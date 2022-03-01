import ItemCart from '../componentes/ItemCart/ItemCart';
import {useContext} from 'react'
import CartContext from "../componentes/Context/CartContext"
import './Carrito.css'

const Carrito = () => {

const {items, total} = useContext(CartContext)


    return(
        <>
        <div className="CartList">
            {items.map(item =><ItemCart card = {item}/>)}
        </div>
        <p>${total}</p>
        </>
    )
}

export default Carrito