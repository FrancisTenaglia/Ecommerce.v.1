import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FetchMlList from "./FetchMlList";

const FetchMlListContainer = () => {
    const [items, setItems] = useState([]);
    const {marketplace} = useParams();



    useEffect(() => {
        fetch("https://api.mercadolibre.com/sites/MLA/search?q=indumentaria%20 &limit=18")
        .then((respuesta)=> respuesta.json())
        .then((data) => {
            setItems(data.results);
        })

    }, [marketplace]);

    return(
        <div className="container">
            <div className="row">
                <FetchMlList items={items}/>
            </div>
        </div>
        
    )
};
export default FetchMlListContainer;
