






export const ModalInformacionE = () => {


    return(
            <>
                <div className="modal fade" id="informacion-m" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="d-flex justify-content-end p-1 m-1">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                        <div className="modal-body">
                            <h2 className="modal-title fs-5 text-center m-1" id="staticBackdropLabel" >Simbolos Logicos</h2>
                                <p className="">
                                Para comenzar, convierta sus proposiciones en expresiones logicas. ¡Aqui tiene una tabla que le servira de guia para uso de los operadores lógicos!
                                </p>

                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>
                                                <td>Operador</td>
                                            </th>
                                            <th>
                                                <td>Símbolo</td>
                                            </th>
                                            <th>
                                                <td>Expresion</td>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                            <tr>
                                                <td>Y</td>
                                                <td>∧</td>
                                                <td>A∧B</td>
                                            </tr>
                                            <tr>
                                                <td>O</td>
                                                <td>∨</td>
                                                <td>A∨B</td>
                                            </tr>
                                            <tr>
                                                <td>Negacion</td>
                                                <td>¬</td>
                                                <td>¬A</td>
                                            </tr>
                                            <tr>
                                                <td>Condicional</td>
                                                <td>→</td>
                                                <td>A→B</td>
                                            </tr>
                                            <tr>
                                                <td>Bicondicional</td>
                                                <td>↔</td>
                                                <td>A↔B</td>
                                            </tr>
                                            <tr>
                                                <td>Disyuncion Excluyente</td>
                                                <td>⊕</td>
                                                <td>A⊕B</td>
                                            </tr>
                                            <tr>
                                                <td>Coma</td>
                                                <td>,</td>
                                                <td>A∧B,A∨B</td>
                                            </tr>
                                    </tbody>
                                </table>
                                <h2 className="modal-title fs-5 text-center m-1" id="staticBackdropLabel" >Ejemplo</h2>
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>
                                                <td>A</td>
                                            </th>
                                            <th>
                                                <td>B</td>
                                            </th>
                                            <th>
                                                <td>A∧B</td>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                            <tr>
                                                <td>0</td>
                                                <td>0</td>
                                                <td>0</td>
                                            </tr>
                                            <tr>
                                                <td>0</td>
                                                <td>1</td>
                                                <td>0</td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>0</td>
                                                <td>0</td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>1</td>
                                                <td>1</td>
                                            </tr>
                                    </tbody>
                                </table>
                        </div>

                </div>
    </div>
    </div>
        </>
    )
}




export const ModalInformacionP = () => {


    return(
            <>
                <div className="modal fade" id="informacion-m-p" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-scrollable">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Informacion Proposiciones</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus sit odio voluptates sapiente eum consectetur! Deleniti voluptate animi facere delectus, quia impedit similique! Voluptatibus dolor illo quia nesciunt eligendi magnam?
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit necessitatibus explicabo in facilis distinctio ea corrupti vel culpa aut consectetur inventore omnis, rerum ipsa voluptate expedita dolore modi qui sit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam assumenda praesentium possimus accusamus minus facere fugiat voluptatibus nemo quas doloremque! Incidunt, iusto vero! Harum ab minus ea veniam repudiandae et?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, maiores. Ea laudantium quis quo assumenda, provident magnam sequi, deleniti iusto impedit ducimus aliquid possimus optio accusamus. Sint hic fugit ex.
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, quae deleniti. Facere dolorem quos aperiam nemo nam inventore et rem modi vero deserunt? Ipsam quas neque alias et? Voluptatem, officiis.
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse cum ab sit debitis vel quo numquam, voluptatum magnam excepturi praesentium libero dolor omnis reiciendis dolorem non totam, rerum ducimus? Doloribus?RE
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Understood</button>
                        </div>
                </div>
    </div>
    </div>
        </>
    )
}




