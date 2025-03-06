
import Header from "../components/header";
import Keyboard from "../components/keyboard";
import ModalInformacion from "../components/modal";
import Table from "../components/table";

const Teclado = () => {
    return(

        <div className="container-principal">
            <Header/>
            <Keyboard/>
            <Table/>
            <ModalInformacion/>
        </div>
    )
}

export default Teclado; 