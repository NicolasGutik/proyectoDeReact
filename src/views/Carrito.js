import Item from '../componentes/Item/Item';
import {useContext} from 'react'
import CartContext from "../componentes/Context/CartContext"
import './Carrito.css'

const Carrito = () => {

const {items} = useContext(CartContext)


    return(
        <>
            {items.map(item =><Item card = {item}/>)}
        </>
    )
}

export default Carrito