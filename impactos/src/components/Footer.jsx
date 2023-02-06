import facebook from "./images/facebook.svg"
import instagram from "./images/instagram.svg"
import whatsapp from "./images/whatsapp.svg"
const Footer =() =>{
    return(
        <div className="containerFooter">
            <div className="row1 estiloFooter">
                <div className="redesSociales">
                    <a href="/"className="ms-3"><img src={facebook} alt="facebook"width={24} /></a>
                    <a href="/"className="ms-3"><img src={instagram} alt="instagram" width={24}/></a>
                    <a href="/"className="ms-3"><img src={whatsapp} alt="whatsapp"width={24} /></a>

                </div>
                <div className="col2 text-end">
                    
                </div>
                
            </div>
            
            <div className="row2 estiloFooter">
                <div className="col1">
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href="/">Politicas de Privacidad</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href="/">Defensa del Consumidor</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href="/">Proteccion de datos personales</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href="/">Contacto</a>
                        </li>
                    </ul>

                </div> <br />
                <div className="col2">
                    
                </div>
            </div>
        </div>
    );
};
export default Footer;   