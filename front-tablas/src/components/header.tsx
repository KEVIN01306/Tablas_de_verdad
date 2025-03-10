import ChangeTopic from "./changeTopic";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {

    const [menuVisible, setMenuVisible] = useState(false);

    const navigate = useNavigate();

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const irGenerador = () =>{
        navigate('/')
        toggleMenu()
    }

    const irProposiciones = () =>{
        navigate('/configuracion/TableVariables')
        toggleMenu()
    }



    return(
        <nav className="nav-principal d-flex justify-content-between">
            <div className="container-e-header col-5 d-flex justify-content-start">
                <img src="/assets/17358911.png" alt="" />
            </div>
            <div className="container-e-header col-6 d-flex justify-content-end">
                <ChangeTopic/>    
                <button className="puntitos-menu" onClick={toggleMenu}>
                    <i style={{fontSize: '2.4rem', marginLeft: '1rem', marginRight: '0.1rem'}} className="bi bi-three-dots-vertical"></i>
                </button>
                                {/*dropdown-menu-dark*/}
                <ul className={`dropdown-menu  ${menuVisible ? "show" : ""}`} id="dropdown">
                    <li><a className="dropdown-item" onClick={irGenerador}>Generador</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" onClick={irProposiciones}>Configurar Proposiciones</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;