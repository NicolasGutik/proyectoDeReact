import './ItemCard.css';
import ItemCount from '../ItemCount/ItemCount';




const ItemCard = (props) => {
    return (
    <div className="container">  
      <div className="card">
        <img className="img" src={props.img}/>
        <h1>{props.nombre}</h1>
        <p>${props.precio}</p>
        <a href="#">Leer más</a>
      </div>
      <ItemCount valorInicial = {1} stock = {5}/>
    </div>
    );
  };
  

  export default ItemCard;