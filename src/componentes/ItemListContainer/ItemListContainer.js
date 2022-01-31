import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = (props) => {
return <div>
    <center>
        <h1 className="titulos">{props.greetings}</h1>
    </center>
    
    <ItemCount valorInicial = {1} stock = {5}/>
</div>;
};

export default ItemListContainer;
