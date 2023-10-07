import { useState, useContext, useEffect} from "react"
import ItemCounter from "./ItemCounter"
import { CartContext } from "./CartContext"


export default function ItemDetail(prop){
    const [cant, setCant] = useState()//Estado que guarda la cantidad que se recibe del handleOnAdd
    const {addItem} = useContext(CartContext)    

    useEffect(() => {
        console.log(`Se agregaron ${cant} || ${prop.prod.producto} al carrito`);
      }, [cant]);


    function handleOnAdd(valor){
        setCant(valor)
        addItem(prop.prod, valor)
    };//Guarda el valor de la cantidad en un estado

    return(
        <div className="Div_product">
            <div className="Product_container">
                <div>
                    <img src={prop.prod.img} alt="" />
                </div>
                <div className="ButtonDetail_container">
                    <div className="Detail_container">
                    <h2>{prop.prod.producto}</h2>
                    <p>Descripcion generica</p>
                    <h3>AR$ {prop.prod.precio}</h3>
                    <hr />
                    </div>
                    <ItemCounter stock={prop.prod.stock} onAdd={handleOnAdd}></ItemCounter>
                </div>
            </div>
        </div>
    )
}