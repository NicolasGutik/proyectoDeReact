import './CartWidget.css'
import img from '../assets/imgCarritoCompras.png';

const CartWidget = () => {
  return (
  <>
  <p className="numero">0</p>
  <img src={img}  id="img-Carrito-Compras" alt='img-Carrito-Compras'/>
  </>
  );
};

export default CartWidget;

