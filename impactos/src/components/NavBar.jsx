import logo from "./images/logo.png";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return(
        <div className="contenedorNavbar">
            <a className="navbar-brand " href="#"><img src={logo} alt="Impactos" width={300}/></a>
            <nav className="navbar navbar-expand-lg bg-white">
                
                <div className="container-fluid">
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link seccionactual">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./"> <b>SOBRE NOSOTROS</b></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./"><b>PROMOCIONES</b></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./"><b>INDUMENTARIA</b></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./"><b>CALZADOS</b></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./"><b>SALE</b></a>
                        </li>
                        </ul>                
                    </div>
                    
                    <div className="estiloWidget">
                        <CartWidget/>
                    </div>
                </div>
                
            </nav>
        </div>
    );
}

export default NavBar