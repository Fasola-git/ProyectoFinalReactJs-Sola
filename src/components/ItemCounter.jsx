import { useState, } from "react"
import { Link } from "react-router-dom";


export default function ItemCounter({stock, onAdd}){
    const [count, setCount] = useState(1);

    function increment(){
        if(count < stock){
            setCount(count + 1);
        }
    };

    function decrement(){
        if (count > 1) {
            setCount(count - 1);
        }
    }

    return(
        <div>
            <div>
                <button onClick={decrement}>-</button>
                <span>{count}</span>
                <button onClick={increment}>+</button>
                <a onClick={() => onAdd(count)} href="#0" className="Boton_comprar">
                Agregar al carrito
                </a>
                <Link to={`/`}>Seguir Comprando</Link>
            </div>
        </div>
    )
}
