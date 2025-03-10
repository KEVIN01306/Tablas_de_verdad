
import Header from "../components/header";
import InfoTablas from "../components/infoTablas";
import Keyboard from "../components/keyboard";
import Table from "../components/table";

const Teclado = () => {
    return(

        <div className="container-principal">
            <Header/>
            <Keyboard/>
            <Table/>
            <InfoTablas/>
        </div>
    )
}

export default Teclado; 