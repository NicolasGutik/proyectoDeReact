import './Item.css';
import ItemCount from '../ItemCount/ItemCount';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEye} from '@fortawesome/free-solid-svg-icons'



const Item = (props) => {
    return (
    <div className="container">  
      <div className="card">
        <img className="img" src={props.img}/>
        <h1>{props.nombre}</h1>
        <p>${props.precio}</p>
        <FontAwesomeIcon className="ojo" icon={faEye}/>
      </div>
      <ItemCount valorInicial = {1} stock = {5} item = {props.nombre}/>
    </div>
    );
  };
  

  export default Item;