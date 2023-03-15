import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemCount =({stock, onAdd}) => {
    const[items, setItems]= useState(1);
    const[itemStock, setItemsStock] = useState(stock);
    const [itemAdded, setItemAdded] = useState(false);
    

    const incrementarStock = () => {
        if (items < itemStock) {
            setItems(items + 1);
        }
    };

    const decrementarStock = () => {
        if(items > 1) {
            setItems(items - 1);
        }
    };

    const addToCart = () => {
        if ( itemStock >= items ) {
            setItemsStock(itemStock - items);
            setItems(1);
            setItemAdded(true);
            onAdd(items);
        }
    };

    useEffect(() => {
        setItemsStock(stock);
    }, [stock]);

    return(
        <div className="container">
            <div className="row my-1">
                <div className="col">
                    <div className="btn-group">
                        <button className="btn btn-warning" onClick={decrementarStock}>-</button>
                        <button className="btn btn-warning">{items}</button>
                        <button className="btn btn-warning" onClick={incrementarStock}>+</button>
                    </div>
                </div>                
            </div>
            <div className="row my-1">
                <div className="col">
                    {itemAdded? <Link to={"/cart"} className="btn btn-warning"> Terminar mi compra</Link>: 
                    <button className="btn btn-warning" onClick={addToCart}> Agregar al carrito</button>}
                </div>
            </div>
        </div>
    );
};

export default ItemCount;

