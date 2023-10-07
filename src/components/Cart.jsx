import { Link } from "react-router-dom"
import { CartContext } from "./CartContext"
import CartProd from "./CartProd"
import { useContext } from "react"

export default function Cart(){
    const {cart, getTotal} = useContext(CartContext)

    if (cart.length !== 0) {  
        return(
        <>
            <ul>
                {cart.map((prod) => <CartProd key={prod.identificador} prod={prod} />)}
                
            </ul>
                <h2 style={{fontSize:"xx-large", paddingLeft:"40px"}}>Total: ${getTotal()}</h2>
            <div style={{paddingLeft:"0px", padding:"10%", paddingTop:"0px"}}>
                <Link to='/checkout' >
                    <button className="Boton_comprar" style={{color: "black", fontFamily: "Albert Sans", fontSize:"larger", fontWeight:"600",}}>Finalizar Compra</button>
                </Link>
            </div>
        </>
        )
    }else
        return(
        <>
        <div className="MsjSinElementos">
            <h2>Vaya! Aun no has agregado elementos al carrito</h2>
            <Link to='/'>Ir al catalogo</Link>        
        </div>
        </>
        )
}