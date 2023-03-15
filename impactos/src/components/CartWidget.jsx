import carrito from "./images/bag-check-fill.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
    const {cartTotal} = useContext(CartContext)
    return(cartTotal() > 0) ?
        <Link to={"/cart"} className="btn btn-warning position-relative" >     
            <div className="row">
                    <span className=" top-0 start-100 ">{cartTotal()}</span> 
                    <img src={carrito} alt={"carrito"} width={30}/>
            </div>
        </Link>   : "";
        
    
};
export default CartWidget;