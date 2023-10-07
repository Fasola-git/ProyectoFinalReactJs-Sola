import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CartProvider ({children}) {
    const [cart, setCart] = useState([]);


    const addItem = (item, cant) => {
        let itemCant = { ...item, cantidad: cant }; //itemCant es el mismo item pero con una propiedad cantidad
        if (!isInCart(item.identificador)) { //Si el item no esta en el carrito, lo añade con una propiedad cantidad
          setCart((prevCart) => [...prevCart, itemCant]); //prevCart es un argumento de la función de callback que representa el estado anterior del carrito (es decir, el valor actual de cart en ese momento, hago esto para evitar problemas con la asincronia de setCart, donde prevCart es la version mas reciente del elemento cart en ese momento)
        } else {
          setCart((prevCart) =>
            prevCart.map((prod) => {
              if (prod.identificador === item.identificador) {
                return { ...prod, cantidad: prod.cantidad + cant };
              } else {
                return prod;
              }
            })
          );
        }
        
      };
      
    useEffect(() => {// Esta función se ejecutará cada vez que 'cart' cambie para poder visualizar el carrito en su version mas reciente
        console.log("El estado del carrito ha cambiado:", cart);
        }, [cart]);

    /* const addItem = (item, cant) => {
        let itemCant = {...item, cantidad: cant}; //itemCant es el mismo item pero con una propiedad cantidad
        console.log(itemCant)
        if (!isInCart(item.identificador)){//Si el item no esta en el carrito, lo añade con una propiedad cantidad
            setCart([...cart, itemCant]);
        } else{
            function addExistentProduct(){
                cart.map(prod => { //Si el item esta en el carrito, mapeamos el carrito buscando el item ya existente en el carrito
               if(prod.identificador === item.identificador) {//para el item nuevo que coincida con el producto
                   const addCant = {
                       ...prod, cantidad: prod.cantidad + cant
                   }
                   return addCant
               }
               else{
                return prod
               }
               }
           )};
            setCart(addExistentProduct())
        }
        console.log(cart)
    };
 */
    const removeItem = (id) => {//Setea el carrito, con el carrito anterior filtrado sin el id que seleccionamos
        setCart(cart.filter((item) => item.identificador !== id));
    };

    const clear = () => {
        setCart([])
    };

    const isInCart = (id) => {
        if (cart.find(item => item.identificador === id)) {
            return true;
        }
        else{
            return false;
        }
    };

    const getCant= () => {
        let CantCarrito = 0
        cart.forEach((prod) => CantCarrito=CantCarrito+prod.cantidad)
        return CantCarrito;
    };

    const getTotal = () => {
        let total = 0
        cart.forEach((prod) => total += (prod.cantidad*prod.precio))
        return total        
    };

    return(
        <CartContext.Provider value={{cart, addItem, removeItem, clear, isInCart, getTotal, getCant}}>
            {children}
        </CartContext.Provider>
    )
}
