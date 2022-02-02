import './ItemCard.css';
import ItemCount from '../ItemCount/ItemCount';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEye} from '@fortawesome/free-solid-svg-icons'



const ItemCard = (props) => {
    return (
    <div className="container">  
      <div className="card">
        <img className="img" src={props.img}/>
        <h1>{props.nombre}</h1>
        <p>${props.precio}</p>
        <FontAwesomeIcon icon={faEye}/>
      </div>
      <ItemCount valorInicial = {1} stock = {5}/>
    </div>
    );
  };
  

  export default ItemCard;