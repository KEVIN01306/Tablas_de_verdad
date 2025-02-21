import ChangeData from "./changedata";




const AccionesTable = () => {
    return (
        <div className="Acciones-table">
            <div className="boolean-binario d-flex justify-content-center align-item-center">
                <p>Boolean</p>
                <ChangeData/>
                <p>Binario</p>
            </div>
        </div>
    )
}

const Table = () => {


    return(
        <section className="result-table-contaier">
            <AccionesTable/>
            <div className="container-table">
                    aqui toy
            </div>
        </section>
    )
}


export default Table;