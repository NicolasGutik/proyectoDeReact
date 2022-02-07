import Item from '../Item/Item'
import './ItemList.css'

const ItemList = (props) => {
    return(
        <> 
                <div className="CardList">
                    {props.items.map((card) => <Item img={card.img} nombre={card.nombre} precio={card.precio} key={card.id}/>)}
                </div>
        </>
)}






export default ItemList;




/* import React, {useState, useEffect} from "react"

const CardList = () => {

    const [users, setUsers] = useState([]);

    useEffect(() =>{
        fetch(InfoCards)
            .then((response) => response.json())
            .then((json) => setUsers(json))
    }, []);

    return(
        <> 
            {users.map((user) =>{
                return(
                
                <div>
                    <ItemCard data={users}/>
                </div>

                );
            })}
        </>
    )
}; */
