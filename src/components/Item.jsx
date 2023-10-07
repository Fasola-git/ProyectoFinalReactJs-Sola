import { Link } from "react-router-dom"


export default function Item(prop){
    if (prop.item.style == "Dark") {
        return(
            <li className="Grid_item">
            <Link to={`/item/${prop.item.id}`}>
                <div className="Product_card">
                    <div className="Card_info">
                        <h3 className="Product_title">{prop.item.productoCard}</h3>
                        <div className="text_hovered">
                            <h3 className="Product_title_hovered White_text_h">{prop.item.productoCard}</h3>
                        </div>
                        <div className="Price">
                            <p className="Price_txt White_text">${prop.item.precio}</p>
                            <p className="Price_hovered White_text_h">${prop.item.precio}</p>
                        </div>
                    </div>
                    <div>
                        <img src={prop.item.img} alt=""></img>
                        <span><h3 className="Add_Carrito White_text_h">Ver más {">"} </h3></span>
                    </div>
                </div>
            </Link>
            </li>                        
        )
    }
    else{
        return(
            <li className="Grid_item">
            <Link to={`/item/${prop.item.id}`}>
                <div className="Product_card">
                    <div className="Card_info">
                        <h3 className="Product_title">{prop.item.productoCard}</h3>
                        <div className="text_hovered">
                            <h3 className="Product_title_hovered">{prop.item.productoCard}</h3>
                        </div>
                        <div className="Price">
                            <p className="Price_txt">${prop.item.precio}</p>
                            <p className="Price_hovered">${prop.item.precio}</p>
                        </div>
                    </div>
                    <div>
                        <img src={prop.item.img} alt=""></img>
                        <span><h3 className="Add_Carrito">Ver más {">"} </h3></span>
                    </div>
                </div>
            </Link>
            </li>
        )
    }
}