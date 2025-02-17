import ChangeTopic from "./changeTopic";

const Header = () => {
    return(
        <nav className="nav-principal d-flex justify-content-between">
            <div className="container-e-header col-5 d-flex justify-content-start">
                <img src="17358911.png" alt="" />
            </div>
            <div className="container-e-header col-6 d-flex justify-content-end">
                <ChangeTopic/>    
            </div>
        </nav>
    )
}

export default Header;