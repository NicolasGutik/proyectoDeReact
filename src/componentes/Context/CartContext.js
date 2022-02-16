import React,{useState} from 'react';

const CartContext = React.createContext()

export const CartContextProvider = ({children}) =>{
    
const [quantity, setQuantity] = useState(0)
const [items, setItems] = useState([])



function añadir(cantidad, item){
    setItems(
        [...items, item]
    )
    setQuantity(quantity + cantidad)
    console.log(items)
}



    return(
        <CartContext.Provider value={{
            quantity,
            añadir,
            items,
        
        }}>
            {children}
        </CartContext.Provider>
    )
    
}

export default CartContext