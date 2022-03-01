import ItemDetail from '../ItemDetail/ItemDetail'
import Pico from '../Pico/pico';
import {useState} from 'react'
import {useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { getgema } from '../ItemCollection/ItemCollection'

const ItemDetailContainer = () => {

    const [item, setItem] = useState(undefined)

    const {ItemId} = useParams()

/*     const InfoCards = [
        {img:"https://i.imgur.com/89Q1gLp.jpg", nombre:"Diamante", precio:8000, id:"D", desc:"Piedra preciosa constituida por carbono cristalizado en el sistema cúbico , que se utiliza en joyería por su brillo y transparencia y en la industria por su elevada dureza .",}, 
        {img:"https://i.imgur.com/cSqKd5u.jpg", nombre:"Rubi", precio:5000, id:"R", desc:"Piedra preciosa constituida por carbono cristalizado en el sistema cúbico , que se utiliza en joyería por su brillo y transparencia y en la industria por su elevada dureza ."},
        {img:"https://i.imgur.com/ZEoVdq2.jpg", nombre:"Esmeralda", precio:3500, id:"E", desc:"Piedra preciosa constituida por carbono cristalizado en el sistema cúbico , que se utiliza en joyería por su brillo y transparencia y en la industria por su elevada dureza ."},
        {img:"https://i.imgur.com/mZnYwJf.jpg", nombre:"Amatista", precio:150, id:"A", desc:"Piedra preciosa constituida por carbono cristalizado en el sistema cúbico , que se utiliza en joyería por su brillo y transparencia y en la industria por su elevada dureza ."},
        {img:"https://i.imgur.com/oYV85XZ.jpg", nombre:"Onix", precio:50, id:"O", desc:"Piedra preciosa constituida por carbono cristalizado en el sistema cúbico , que se utiliza en joyería por su brillo y transparencia y en la industria por su elevada dureza ."},
        {img:"https://i.imgur.com/cRVZG9X.jpg", nombre:"Zafiro", precio:10, id:"Z", desc:"Piedra preciosa constituida por carbono cristalizado en el sistema cúbico , que se utiliza en joyería por su brillo y transparencia y en la industria por su elevada dureza ."},
    ] */

    useEffect(() =>{
        getgema(ItemId).then(item =>{
            setItem(item)
            console.log(item)
        }).catch((error)=> {
            console.log('Error encontrando los items ' + error)
        })        
        return (() => {             
            setItem(undefined)         
        })     
    },[ItemId])



/*     const pedido = new Promise((resolve, reject) => {

    const onSuccessful = true
        if(onSuccessful){
            setTimeout(() => resolve(InfoCards), 1000)
        }else {
            setTimeout(() => reject('No hay productos'), 3000)
        }
    }) */

/*     useEffect(()=>{
    pedido.then(items => {
        setItem(items.find(item => item.id === ItemId))
    })
    },) */


    return(
        <div>
            {item ? <ItemDetail item = {item}/> : <Pico/>}
        </div>
        ) ;
};


export default ItemDetailContainer