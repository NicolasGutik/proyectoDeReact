import React from 'react'
import {Button, TextField} from '@mui/material'
import MessageID from '../componentes/MessageID/MessageID'
import {useState, useContext} from "react"
import CartContext from "../componentes/Context/CartContext"
import { addDoc, collection } from 'firebase/firestore'
import {db} from '../componentes/ItemCollection/ItemCollection'
import {Link} from 'react-router-dom'; 
import swal from 'sweetalert2'
import './Shop.css'


const initialState = {
    name: "",
    lastName: "",
    phone: "",
    email: "",
};

const Shop = () => {

    const [values, setValues] = useState(initialState);
    const [purchaseID, setPurchaseID] = useState("");
    const { buyItem, items, clearItems } = useContext(CartContext);

    const onChange = (e) => {
        const { value, name } = e.target;
        setValues({ ...values, [name]: value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const docRef = await addDoc(collection(db, "purchases"), {
        values,
    });
        setPurchaseID(docRef.id);
        setValues(initialState);
    };

    const confirmPurchase = () => {
        if (items.length <= 0) {
            swal({
            title: "No items in Cart",
            icon: "error",
            button: "OK",
        });
        } else {
            buyItem();
        }
    };

return (
<>
    <div>
        <center>
            <div>
                <h2 className="tituloShop">Finalizar Compra</h2>
            </div>
        <form className="formContainerShop" onSubmit={onSubmit}>
            <TextField
            placeholder="Nombre"
            name="name"
            value={values.name}
            onChange={onChange}
            sx={{ margin: "10px", width: "300px", input: { color: 'white' } }}
            />

            <TextField
            placeholder="Apellido"
            name="lastName"
            value={values.lastName}
            onChange={onChange}
            sx={{ margin: "10px", width: "300px", input: { color: 'white' } }}
            />

            <TextField
            placeholder="Telefono"
            name="phone"
            value={values.phone}
            onChange={onChange}
            sx={{ margin: "10px", width: "300px", input: { color: 'white' }}}
            />

            <TextField
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={onChange}
            sx={{ margin: "10px", width: "300px", color: "white", input: { color: 'white' } }}
            />

            <button className="btnSendAction" onClick={() => confirmPurchase()}>
            <b>CONFIRM PURCHASE</b>
            </button>
        </form>
        <Link to={"/Productos"}>
            <button type="button" className="botonSeguir" onClick={() => {clearItems()}}>Seguir Comprando</button>
        </Link>
        {items.length >= 1 
            ? purchaseID && <MessageID purchaseID={purchaseID}/>
            : ""}
        </center>
    </div>
    </>
)
}


export default Shop