import ItemCard from '../ItemCard/ItemCard'
import './CardList.css'
import img from '../assets/esmeralda.jpg'

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



const CardList = () => {
    return(
        <> 
                <div className="CardList">
                    {InfoCards.map((card) => <ItemCard img={card.img} nombre={card.nombre} precio={card.precio} key={card.id}/>)}
                </div>
        </>
)}






const InfoCards = [
        {img:"https://i.imgur.com/89Q1gLp.jpg", nombre:"Diamante", precio:100, id:"D"}, 
        {img:"https://i.imgur.com/ZEoVdq2.jpghttps://i.imgur.com/ZEoVdq2.jpg", nombre:"Esmeralda", precio:100, id:"E"},
        {img:"https://i.imgur.com/mZnYwJf.jpg", nombre:"Amatista", precio:100, id:"A"},
        {img:"https://i.imgur.com/cRVZG9X.jpg", nombre:"Zafiro", precio:100, id:"Z"},
        {img:"https://i.imgur.com/cSqKd5u.jpg", nombre:"Rubi", precio:100, id:"R"},
        {img:"https://i.imgur.com/oYV85XZ.jpg", nombre:"Onix", precio:100, id:"O"},
        ]


export default CardList;