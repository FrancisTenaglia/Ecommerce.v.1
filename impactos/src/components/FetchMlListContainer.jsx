import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FetchMlList from "./FetchMlList";
import Loading from "./Loading";

const FetchMlListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const {marketplace} = useParams();



    useEffect(() => {
        fetch("https://api.mercadolibre.com/sites/MLA/search?q=vestidos%20 &limit=50")
        .then((respuesta)=> respuesta.json())
        .then((data) => {
            setItems(data.results);
            setLoading(false);
        });

    }, [marketplace]);

    return(
        <div className="container">
            <div className="row">
                { loading? <Loading /> : <FetchMlList items={items}/>}
            </div>
        </div>
        
    );
};
export default FetchMlListContainer;
