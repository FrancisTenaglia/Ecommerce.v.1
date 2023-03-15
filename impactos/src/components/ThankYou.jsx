import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";

const ThankYou = () => {
    const {orderId} = useParams();

    return(
        <div className="container my-5">
            <div className="row">
                <div className="col-md-12 text-center">
                    { orderId ? <div className="alert alert-warning text-center" role="alert"> <h3>Gracias por tu Compra!</h3> <p>Se genero una Orden de Compra con el ID: <b>{orderId}</b> </p> </div> : ""}
                    <Link to={"/"} className="btn btn-warning">Volver al Menu Principal </Link>
                </div>
            </div>

        </div>
    );
};

export default ThankYou;