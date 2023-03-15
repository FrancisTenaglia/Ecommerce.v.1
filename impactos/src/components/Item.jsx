import { Link } from "react-router-dom";

const Item =({item}) => {
    return(
        <Link to={`/item/${item.id}`} className="text-decoration-none text-dark">
            <div className="card border-0 align-items-center">
                <img src={item.imagen} className="card-img-top probandoo" alt={item.name} />
                <div className="card-body border-0 text-center">
                
                </div>
            </div>
        </Link>
    );
};

export default Item;