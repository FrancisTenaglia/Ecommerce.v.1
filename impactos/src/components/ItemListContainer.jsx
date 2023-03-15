import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore";
import Loading from "./Loading";


const ItemListContainer =() =>{
    const [items,setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();
   
   /*                
   //aca hago la conexion a la base de datos para cargar los productos que tengo en el JSON a la base de datos
   
   useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");

    arrayProductos.forEach(item => {
        addDoc(itemsCollection, item);
    })
    
        console.log("se agregaron los productos");
    }, []);

    */ 

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const  filter = id ? query(itemsCollection, where("categoria", "==", id )) : itemsCollection;
        getDocs(filter).then(elements => {
            setItems(elements.docs.map(element => ({id:element.id, ...element.data()})));
            setLoading(false);
        });
    }, [id]);

    return(
        <div className="container">   
                { loading ? <Loading />: <ItemList items={items} /> }          
        </div>
    );
};

export default ItemListContainer;