import { useEffect, useState } from "react"
import {useParams } from "react-router-dom"
import ItemList from "./ItemList"
import { collection, getDocs, query, where, getFirestore} from "firebase/firestore";


/* function asyncMock(id){// FUNCION QUE FILTRA Y DEVUELVE EN UNA PROMESA EL JSON DE PRODUCTOS SEGUN id
    return new Promise ((resolve, reject) => {
        setTimeout(() =>{
            if(id == null) {
                resolve(productos)
            }else{
                const resultado = productos.filter(item => item.category === id)
                resolve(resultado)
            }
        }, 1500)
    })
} */

export default function ItemListContainer(){
    const [Cat, setCat] = useState([]); /* ESTADO DE LAS CATEGORIAS (FILTRADAS O NO) DE LOS PRODUCTOS DEL JSON */
    const {id} = useParams()
/* 
    useEffect(() => {// Efecto que se actica cuando se renderiza el componente y cuando se actualiza el estado de los productos  
        asyncMock(id).then(res => setCat(res))// Utiliza la funcion asyncMock para filtrar los productos provenientes por el parametro id y setea el estado de los productos filtrados
    }, [id]);// Y se actualiza con cada distinto id que le pongamos 
 */
    useEffect(() => {
        const db = getFirestore();
        let productsRef
        if(id){
            productsRef = query(collection(db, "Productos"),where('category','==',id))
        }else{
            productsRef = query(collection(db, "Productos"))
        }
        getDocs(productsRef).then((snapshot) => {
            if (snapshot.size !== 0) {
                setCat(snapshot.docs.map((doc) => doc = { id:doc.id,...doc.data()})) 
            }
        })

    }, [id]);

    /* const getData = async (category) =>{
        try {
          const document = category ? query(collection(db,"Productos"),where('category','==',category))
                                    : collection(db,"Productos")
          const col = await getDocs(document)
          const result = col.docs
          setCat(result)
        } catch (error) {
          console.log(error)
        } */


    return(
        <>
            <ItemList items={Cat}></ItemList>
        </>
    )
}