import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    
    return(
        <div className="container">
            <div className="row my-5">
                <div className="col d-flex align-items-center justify-content-end">
                    <img src={item.imagen} alt={item.nombre} />                    
                </div>
                <div className="col d-flex align-items-center">
                    <div>
                        <h1>{item.name}</h1>
                        <p>{item.descripcion}</p>
                        <h5>talle: {item.talle}</h5>
                        <p><b>${item.precio}</b></p>
                        <ItemCount stock={item.stock}/>             
                    </div>
                </div>
            </div>
        </div>

    )
};

export default ItemDetail;