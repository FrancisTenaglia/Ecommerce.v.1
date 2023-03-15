import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    const {addItem} = useContext(CartContext); 

    const onAdd = (quantity) => {
        addItem(item, quantity);
    };
    
    return(
        <div className="container">
            <div className="row my-5 d-flex align-items-center">
                <div className="col d-flex align-items-center justify-content-end">
                    <img className="tamImagItemDetail" src={item.imagen} alt={item.nombre} />                    
                </div>
                <div className="col d-flex align-items-center">
                    <div className="">
                        <h1>{item.name}</h1>
                        <p>{item.descripcion}</p>
                        <h5>talle: {item.talle}</h5>
                        <p><b>${item.precio}</b></p>
                        <ItemCount stock={item.stock} onAdd={onAdd} />             
                    </div>
                </div>
            </div>
        </div>

    )
};

export default ItemDetail;