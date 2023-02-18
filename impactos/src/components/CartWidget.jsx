import carrito from "./images/bag-check-fill.svg";

const CartWidget = () => {
    return(
        <div className="row">
            <button type="button" className="btn estiloBtnCarrito position-relative ">
                <img src={carrito} alt={"carrito"} width={30}/>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0</span>
            </button>    
        </div>
        
    )
};
export default CartWidget;