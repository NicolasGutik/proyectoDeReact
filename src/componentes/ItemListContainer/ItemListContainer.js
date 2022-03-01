import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import Pico from '../Pico/pico';
import {useState} from 'react'
import {useEffect} from 'react'
import { getgemas } from '../ItemCollection/ItemCollection'


const ItemListContainer = (props) => {

/* info api (simulando)*/

/* const InfoCards = [
        {img:"https://i.imgur.com/89Q1gLp.jpg", nombre:"Diamante", precio:8000, id:"D"}, 
        {img:"https://i.imgur.com/cSqKd5u.jpg", nombre:"Rubi", precio:5000, id:"Grp4i5PM98XsX309xrzG"},
        {img:"https://i.imgur.com/ZEoVdq2.jpg", nombre:"Esmeralda", precio:3500, id:"E"},
        {img:"https://i.imgur.com/mZnYwJf.jpg", nombre:"Amatista", precio:150, id:"A"},
        {img:"https://i.imgur.com/oYV85XZ.jpg", nombre:"Onix", precio:50, id:"O"},
        {img:"https://i.imgur.com/cRVZG9X.jpg", nombre:"Zafiro", precio:10, id:"Z"},
    ]
 */
    const [listItem, setListItem] = useState([])

useEffect(() =>{
    getgemas().then(item =>{
        setListItem(item)
        console.log(item)
    }).catch((error)=> {
        console.log('Error encontrando los items ' + error)
    })
    return (() => {             
        setListItem(undefined)         
    })     
},[])

/* const pedido = new Promise((resolve, reject) => {

    const onSuccessful = true
        if(onSuccessful){
            setTimeout(() => resolve(InfoCards), 3000)
        }else {
            setTimeout(() => reject('No hay productos'), 3000)
        }
})

useEffect(()=>{
    pedido.then(items => {setListItem(items)})
    console.log(pedido)
},)
 */

return(
    <div>
        {listItem.length > 0 ? <ItemList items = {listItem}/> : <Pico/>}
    </div>
) ;
};

export default ItemListContainer;


