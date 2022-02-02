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
        {img:"https://i.imgur.com/uNFUNHy.jpg", nombre:"Diamante", precio:100, id:"D"}, 
        {img:"https://i.imgur.com/HjKpGRV.jpg", nombre:"Esmeralda", precio:100, id:"E"},
        {img:"https://i.imgur.com/vItApdA.jpg", nombre:"Amatista", precio:100, id:"A"},
        {img:"https://i.imgur.com/9z7LlNS.jpg", nombre:"Zafiro", precio:100, id:"Z"},
        {img:"https://i.imgur.com/1JHVg0z.jpg", nombre:"Rubi", precio:100, id:"R"},
        {img:"https://i.imgur.com/3nEFd6y.jpg", nombre:"Onix", precio:100, id:"O"},
        ]


export default CardList;