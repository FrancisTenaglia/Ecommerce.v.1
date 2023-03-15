import dest1 from "./images/dest1.JPG";
import dest2 from "./images/dest2.JPG";
import dest3 from "./images/dest3.JPG";

const Promociones = () => {
    return( 
        <div className="row estiloFila">
            <div className="col d-flex justify-content-evenly">
                <img src={dest1} alt="dest1"/>
            </div>
            <div className="col d-flex justify-content-evenly">
                <img src={dest2} alt="dest2"/>                
            </div>
            <div className="col d-flex justify-content-evenly">
                <img src={dest3} alt="dest3"/>
            </div>
        </div>        
    );
};

export default Promociones;