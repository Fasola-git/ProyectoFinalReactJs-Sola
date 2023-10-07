import {useContext, useState } from "react";
import { collection, addDoc, getFirestore} from "firebase/firestore";
import { CartContext } from './CartContext';


/*
-Crear la instancia de la db
-Crear el objeto order con los datos del buyer
-Crear una funcion para el boton de finalizar compra que, al hacer click mande la order a firestore
*/

export default function Checkout() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const {cart, getTotal}= useContext(CartContext)
    const [orderId, setOrderId] = useState()

    function crearOrden(){
        const items =cart.map(prod=> {return {id: prod.identificador, title: prod.producto, price: prod.precio, amount: prod.cantidad}})
        const total = getTotal()
        const order = {
            buyer: {
                name, email, phone,
            },
            items,
            total,
        };
        console.log(order)
        if (cart.length !== 0) {
            const db = getFirestore()
            const ordenesRef = collection(db, "Ordenes");
            addDoc(ordenesRef, order).then(result => setOrderId(result.id))
        }
        else{
            console.log("No hay elementos en el carrito")
        }
    }

    if (orderId) {
        return(<>
            <h1 style={{fontSize:"xx-large", textAlign: "center"}}>Gracias por tu compra!</h1>
            <h2 style={{fontSize:"x-large", textAlign: "center"}}>{`Se ha registrado tu pedido con el numero de orden: ${orderId}`}</h2>
        </>
        )        
    }else{
    return (
        <>
            <h1 style={{fontSize:"xx-large", paddingLeft:"40px"}}>Finalizando Compra</h1>
            <hr />
            <div style={{paddingLeft:"5%"}}>
                <h4 style={{fontSize:"xx-large",}} >Completa tus Datos:</h4>
                <form onSubmit={(e) => e.preventDefault()} style={{display:"flex", flexDirection:"column"}}>
                    <label style={{fontSize:"x-large"}}>-Nombre: </label>
                    <input style={{width:"50%", height:"30px", fontSize:"larger"}} required type="text" name="Nombre" placeholder="Nombre" value={name} onChange={(event) => setName(event.target.value)}/>
                    <label style={{fontSize:"x-large",}}>-Email: </label>
                    <input style={{width:"50%", height:"30px", fontSize:"larger"}} required type="email" name="Email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)}/>
                    <label style={{fontSize:"x-large",}}>-Número de teléfono: </label>
                    <input style={{width:"50%", height:"30px", fontSize:"larger"}} required type="number" name="Telefono" placeholder="Telefono" value={phone} onChange={(event) => setPhone(event.target.value)}/>
                    <br /><br />
                    <div style={{paddingLeft:"0px", padding:"10%", paddingTop:"0px"}}>
                    <button className="Boton_comprar" onClick={crearOrden} style={{color: "black", fontFamily: "Albert Sans", fontSize:"larger", fontWeight:"600",}}> Finalizar Compra</button>
                    </div>
                </form>
            </div>
        </>
    )
    }
}