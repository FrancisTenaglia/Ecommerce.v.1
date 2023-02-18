import { NavLink } from "react-router-dom";
import facebook from "./images/facebook.svg"
import instagram from "./images/instagram.svg"
import whatsapp from "./images/whatsapp.svg"
const Footer =() =>{
    return(
        <div className=" row containerFooter">
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
                            <NavLink className="nav-link text-secondary" to={"/"}>Politicas de Privacidad</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-secondary" to={"/"}>Defensa del Consumidor</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-secondary" to={"/"}>Proteccion de datos personales</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-secondary" to={"/"}>Contacto</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-secondary" to={"/"}>HOME</NavLink>
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