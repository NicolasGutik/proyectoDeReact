import Item from 'component/Item/Item.js';

const Carrito = () => {

    return(
        <>
        <h1>Hola</h1>
        {carrito.length === 0 ? (<p>0</p>) : (carrito.map((card => <Item key={card.id} card={card}></Item>)))}
        </>
    )
}

export default Carrito