import React,{useState} from 'react';

const CartContext = React.createContext()

export const CartContextProvider = ({children}) =>{
    
const [quantity, setQuantity] = useState(0)
const [items, setItems] = useState([])
const [total, setTotal] = useState(0)

const enCarrito = (id) =>{
    const found = items.find(item => item.id === id)
    return found
}


function añadir(cantidad, item){

    setQuantity(quantity + cantidad)
    console.log(item.precio)
    setTotal(total + item.precio * cantidad)

    if(enCarrito(item.id)){
        setItems(items.map((prod)=>{
            if(prod.id === item.id){
                prod.quantity += cantidad
            }
            return prod
        }))
    }else{
        const newItem = {
            ...item,
            quantity:cantidad
        }
        setItems([...items, newItem])
    }
console.log(items)
        
/*     enCarrito(item.id) ? setItems(items.map((prod)=>{
        if(prod.id === item.id){
            prod.quantity += cantidad
        }
        return prod
    }))
    :setItems([...items, {...items, quantity:cantidad}]) */
    
}

function limpiar(){
    setItems([])
}


    return(
        <CartContext.Provider value={{
            quantity,
            añadir,
            items,
            total,
            limpiar,
        }}>
            {children}
        </CartContext.Provider>
    )
    
}

export default CartContext