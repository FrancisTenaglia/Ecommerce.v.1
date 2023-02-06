import carrito from "./images/bag-check-fill.svg";

const CartWidget = () => {
    return(
        <button type="button" className="btn btn-warning position-relative ">
            <img src={carrito} alt={"carrito"} width={30}/>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
        </button>
    )
};
export default CartWidget 