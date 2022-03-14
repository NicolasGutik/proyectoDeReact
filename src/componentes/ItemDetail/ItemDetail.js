import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEye} from '@fortawesome/free-solid-svg-icons'


const ItemDetail = ({item, nombre}) => {


    return (
        <div className="divCard"> 
        <div className="containerDetail">  
        <div className="cardDetail">
            <img alt="img" className="imgDetail" src={item.img}/>
            <h1>{item.nombre}</h1>
            <p>${item.precio}</p>
            <FontAwesomeIcon className="ojoDetail" icon={faEye}/>
            <ItemCount className="Contador" valorInicial = {1} stock = {item.stock} item = {nombre}/>
        </div>
        <div className="descDetail">
            <h2>{item.nombre}</h2>
            <p className="desc">{item.desc}</p>
        </div>
        </div>
        </div>
    );
};


export default ItemDetail;