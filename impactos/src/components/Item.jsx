import { Link } from "react-router-dom";

const Item =({item}) => {
    return(
        <Link to={"/item/" + item.index} className="text-decoration-none text-dark">
            <div className="card border-0   ">
                <img src={item.imagen} className="card-img-top" alt={item.name} />
                <div className="card-body border-0 text-center">
                    <p className="card-title">{item.name} </p>
                </div>
            </div>
        </Link>
    )
}

export default Item;