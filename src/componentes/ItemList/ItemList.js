import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({items}) => {
    return(
        <> 
                <div className="CardList">
                    {items.map((card) => <Item key={card.id} card={card} items={items}/>)}
                </div>
        </>
)}






export default ItemList;


