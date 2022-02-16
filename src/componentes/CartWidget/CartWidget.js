import './CartWidget.css'
import img from '../assets/imgCarritoCompras.png';
import {useContext} from 'react';
import CartContext from '../Context/CartContext'


const CartWidget = () => {

  const {quantity} = useContext(CartContext)

  return (
  <div className="CartWidget">
  <p className="numero">{quantity}</p>
  <img src={img}  id="img-Carrito-Compras" alt='img-Carrito-Compras'/>
  </div>
  );
};

export default CartWidget;

