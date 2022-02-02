import './ItemListContainer.css';
import CardList from '../CardList/CardList';


const ItemListContainer = (props) => {
return <div>
    <center>
        <h1 className="titulos">{props.greetings}</h1>
    </center>
    <CardList/>
</div>;
};

export default ItemListContainer;
