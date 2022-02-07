import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEye} from '@fortawesome/free-solid-svg-icons'


const ItemDetail = (props) => {
    return (
        <> 
        <div className="containerDetail">  
        <div className="cardDetail">
            <img alt="img" className="imgDetail" src={props.item.img}/>
            <h1>{props.item.nombre}</h1>
            <p>${props.item.precio}</p>
            <FontAwesomeIcon className="ojoDetail" icon={faEye}/>
            <ItemCount className="Contador" valorInicial = {1} stock = {5} item = {props.nombre}/>
        </div>
        <div className="descDetail">
            <h2>Diamante</h2>
            <p className="desc">{props.item.desc}</p>
        </div>
        </div>
        </>
    );
};


export default ItemDetail;