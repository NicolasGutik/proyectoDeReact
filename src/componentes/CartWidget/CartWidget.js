import './CartWidget.css'
import img from '../assets/imgCarritoCompras.png';


const CartWidget = () => {
  return (
  <div className="CartWidget">
  <p className="numero">0</p>
  <img src={img}  id="img-Carrito-Compras" alt='img-Carrito-Compras'/>
  </div>
  );
};

export default CartWidget;

