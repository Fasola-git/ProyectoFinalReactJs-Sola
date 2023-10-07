import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { doc, getDoc, getFirestore } from "firebase/firestore";

export default function ItemDetailContainer(){
    const [Prod, setProd] = useState();
    const {id} = useParams()
    console.log(id)

    useEffect(() => {
        const db = getFirestore();

        let productRef = doc(db, "Productos", id)
        getDoc(productRef).then((snapshot) => {
            if(snapshot.exists()){
            setProd({ id:snapshot.id,...snapshot.data() }); 
            console.log(snapshot.data())
            }
        })
    }, [id]);
        
    if (Prod) {  
        return(
            <ItemDetail prod={Prod} />
        )
    }
}
