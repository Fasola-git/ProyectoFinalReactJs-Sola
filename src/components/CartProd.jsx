import { useContext } from "react"
import { CartContext } from "./CartContext"

export default function CartProd(prop){

    const {removeItem} = useContext(CartContext)
    return(<>
    <li className="Card_product">
        <div className="Card_img">
            <img src={prop.prod.img}></img>
        </div>
        <div className="Card_description">
            <h3>{prop.prod.producto}</h3>
            <p>Cantidad: {prop.prod.cantidad}</p>
            <p>Precio por unidad: ${prop.prod.precio}</p>
            <p>Total: ${prop.prod.precio * prop.prod.cantidad}</p>
            <a onClick={() => {
                let ProdCerrado = event.target.parentNode.parentNode;
                ProdCerrado.classList.add('Removed');
                setTimeout(function(){
                removeItem(prop.prod.identificador)
            }, 300)
            }
            } href="#0" className="ElimProd_Button">Eliminar producto</a>
        </div>
    </li>
    </>
    
    )
}