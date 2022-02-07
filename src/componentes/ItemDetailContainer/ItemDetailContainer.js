import ItemDetail from '../ItemDetail/ItemDetail'
import Pico from '../Pico/pico';
import {useState} from 'react'
import {useEffect} from 'react'


const ItemDetailContainer = () => {

    const [item, setItem] = useState(undefined)

    const InfoCards = [
        {img:"https://i.imgur.com/89Q1gLp.jpg", nombre:"Diamante", precio:8000, desc:"Piedra preciosa constituida por carbono cristalizado en el sistema cúbico , que se utiliza en joyería por su brillo y transparencia y en la industria por su elevada dureza .", id:"D"}, 
        {img:"https://i.imgur.com/cSqKd5u.jpg", nombre:"Rubi", precio:5000, id:"R"},
        {img:"https://i.imgur.com/ZEoVdq2.jpg", nombre:"Esmeralda", precio:3500, id:"E"},
        {img:"https://i.imgur.com/mZnYwJf.jpg", nombre:"Amatista", precio:150, id:"A"},
        {img:"https://i.imgur.com/oYV85XZ.jpg", nombre:"Onix", precio:50, id:"O"},
        {img:"https://i.imgur.com/cRVZG9X.jpg", nombre:"Zafiro", precio:10, id:"Z"},
    ]

    const pedido = new Promise((resolve, reject) => {

    const onSuccessful = true
        if(onSuccessful){
            setTimeout(() => resolve(InfoCards), 4000)
        }else {
            setTimeout(() => reject('No hay productos'), 3000)
        }
    })

    useEffect(()=>{
    pedido.then(items => {
        setItem(items.find(item => item.id === 'D'))
    })
    },)


    return(
        <div>
            {item ? <ItemDetail item = {item}/> : <Pico/>}
        </div>
        ) ;
};


export default ItemDetailContainer