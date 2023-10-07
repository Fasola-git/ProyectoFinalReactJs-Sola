import Item from "./Item"


export default function ItemList(prop){
    
    return(
        <div className="ItemListCont" id="Main_merch">
            <div id="Grid_container">
                <ul className="Products_grid" id="Products_grid">
                    {prop.items.map((prod) => (<Item key={prod.identificador} item={prod}/>))}
                </ul>
            </div>
        </div>
    )
}