import React, { useContext } from 'react'
import CarritoIcon from '../assets/cd-cart.svg'
import {CartContext} from '../components/CartContext'
import { Link } from 'react-router-dom'

export default function CartWidget(){
    const {getCant} = useContext(CartContext)    

    return(
        <div className="Carrito_icon">
            <Link to={`/cart`}>
                <img src={CarritoIcon} className="Carrito_icon"></img>
                {getCant()>0&&<span>{getCant()}</span>}
            </Link>
            
        </div>
    )
}
