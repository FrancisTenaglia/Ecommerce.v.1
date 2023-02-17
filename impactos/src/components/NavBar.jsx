import logo from "./images/logo.png";
import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return(
        <div className=" row">
            <Link className="navbar-brand " to={"/"}><img src={logo} alt="Impactos" width={300}/></Link>
            <nav className="navbar navbar-expand-lg bg-white">
                
                <div className="container-fluid">
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link seccionactual" activeClassName={"active"} to={"/"}>HOME</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName={"active"} to={"/category/ropa"}> <b>Ropa</b></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName={"active"} to={"/category/calzados"}><b>Calzados</b></NavLink>
                            </li>
            
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName={"active"} to={"/category/accesorios"}><b>Accesorios</b></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName={"active"} to={"/catmarketplace/marketplace"}><b>Marketplace</b></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"*"}><b>Sobre Nosotros</b></NavLink>
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