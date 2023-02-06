
import destacado1 from "./images/destacado1.jpg"
import destacado2 from "./images/destacado2.jpg"
import destacado3 from "./images/destacado3.jpg"

const Promociones = () => {
    return( 

        <div className="contenedorPromociones">
            <div className="estiloFila">
                <img src={destacado1} alt="destacado1"/>
            </div>
            <div className="estiloFila">
                <img src={destacado2} alt="destacado2" />

            </div>
            <div className="estiloFila">
                <img src={destacado3} alt="destacado3" />
            </div>                
        </div>
    );
}
export default Promociones;