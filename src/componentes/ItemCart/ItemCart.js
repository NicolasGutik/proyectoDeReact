import './ItemCart.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEye} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';
import CartContext from "../Context/CartContext"
import {useContext} from 'react'



const ItemCart = ({card}) => {

    const {eliminar} = useContext(CartContext)

    return (
    <div className="container">  
    <div className="card">
        <img className="img" src={card.img}/>
        <h1>{card.nombre}</h1>
        <p>${card.precio}</p>
        <p>x{card.quantity}</p>
        <Link to={`/detail/${card.id}`}><FontAwesomeIcon className="ojo" icon={faEye}/></Link>
    </div>
    <button type="button" className="botonBorrar" onClick={()=>eliminar(card.id)}>Eliminar</button>
    </div>
    );
};


export default ItemCart;