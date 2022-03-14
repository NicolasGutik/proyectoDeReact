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
        console.log(item.precio)
        setTotal(total + item.precio * cantidad)
    
        if(enCarrito(item.id)){
            setItems(items.map((prod)=>{
                if(prod.id === item.id){
                    if(cantidad + prod.quantity <= item.stock){
                        prod.quantity += cantidad
                        setQuantity(quantity + cantidad)
                    }
                }
                return prod
            }))
        }else{
            const newItem = {
                ...item,
                quantity:cantidad
            }
            setItems([...items, newItem])
            setQuantity(quantity + cantidad)
        }
}

function limpiar(){
    setItems([])
    setQuantity(0)
    setTotal(0)
}

function eliminar(id){
    const nuevoItems = items.filter(item => item.id != id)
    //items = todos los objetos en el carrito
    //[1, 2, 3].filter(nico=>nico != 2) = [1, 3]
    const itemCantidad = items.find(item => item.id === id)
    setQuantity(quantity - itemCantidad.quantity) //total = 10 cantidad = 3 
    setItems(nuevoItems)
    setTotal(total - itemCantidad.precio * itemCantidad.quantity)
}



    return(
        <CartContext.Provider value={{
            quantity,
            añadir,
            items,
            total,
            limpiar,
            eliminar,
        }}>
            {children}
        </CartContext.Provider>
    )
    
}

export default CartContext