import './Item.css';
import ItemCount from '../ItemCount/ItemCount';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEye} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';



const Item = ({card, items}) => {
    return (
    <div className="container">  
      <div className="card">
        <img className="img" src={card.img}/>
        <h1>{card.nombre}</h1>
        <p>${card.precio}</p>
        <Link to={`/detail/${card.id}`}><FontAwesomeIcon className="ojo" icon={faEye}/></Link>
      </div>
      <div>
        <ItemCount valorInicial = {1} stock = {5} items={items} card={card} key={card.id}/>
      </div>
    </div>
    );
  };
  

  export default Item;