

import { Modal } from "bootstrap";
import { useNavigate } from "react-router-dom"



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
                                                Operador
                                            </th>
                                            <th>
                                                Símbolo
                                            </th>
                                            <th>
                                                Expresion
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
                                <h2 className="modal-title fs-5 text-center m-1" id="staticBackdropLabel" >Ejemplos de entradas validas</h2>
                                <p>Ingresa las expresiones lógicas que deseas evaluar, separadas por comas.</p>
                                <p>Puedes ingresar un máximo de 3 expresiones.</p>
                                <p>Asegúrate de que las variables utilizadas en las expresiones hayan sido ingresadas previamente.</p>
                                <p className="">
                                ¡Aqui tiene algunos ejemplos de entradas validas!
                                </p>
                                    <p>A∧B</p>
                                    <p>A∨B, A→B</p>
                                    <p>A→B, A↔B, A∧B</p>
                                <h2 className="modal-title fs-5 text-center m-1" id="staticBackdropLabel" >Ejemplos de entradas no validas</h2>
                                <p className="">
                                ¡Aqui tiene algunos ejemplos de entradas no validas!
                                </p>
                                    <p>A ∧ B ∧ C (más de 2 variables en una expresión)</p>
                                    <p>A → (B ∧ C) (expresión anidada)</p>
                                <h2 className="modal-title fs-5 text-center m-1" id="staticBackdropLabel" >Ejemplo de tabla de verdad</h2>
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>
                                                A
                                            </th>
                                            <th>
                                                B
                                            </th>
                                            <th>
                                                A∧B
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
                            <div className="d-flex justify-content-end p-1 m-1">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                        <div className="modal-body">
                            <h2 className="modal-title fs-5 text-center m-1" id="staticBackdropLabel" >Configurar Proposiciones</h2>
                                <p className="">
                                Para configurar proposiciones, ¡Aqui hay algunas instrucciones para hacerlo correctamente!
                                </p>
                                <h6>Algunos pasos basicos:</h6>
                                <ol>
                                    <li>Ingresa las variables proposicionales que deseas utilizar, separadas por comas.</li>
                                    <table className="table table-striped">
                                    <tbody>
                                            <tr>
                                                <td>A,B,C</td>
                                            </tr>
                                    </tbody>
                                    </table>
                                    <li>Puedes ingresar un máximo de 3 variables o un minimo de 1 variables.</li>
                                    <li>Ejemplo: A, B, C o A,B.</li>
                                    <li>Luego de haberlas configurado correctamente puedes guardarlas, posteriormente puedes generar tus expresiones logicas.</li>
                                </ol>
                        </div>

                </div>
    </div>
    </div>
        </>
    )
}

export const ModalNotVariables = () =>  {

    const navigate = useNavigate()

    const irProposiciones = () =>{
        cerrarModal()
        navigate('/configuracion/TableVariables')
    }

    const cerrarModal = () => {
        const modalElement = document.querySelector("#advertenciaV");
    
        if (modalElement) {
            const modal = Modal.getInstance(modalElement) || new Modal(modalElement);
            modal.hide();
    
            setTimeout(() => {
                const backdrop = document.querySelector(".modal-backdrop");
                if (backdrop) {
                    backdrop.remove();
                    document.body.classList.remove("modal-open"); 
                    document.body.style.overflow = "auto"; 
                }
            }, 300);
        }
    };
    
    return(
        <div className="modal fade" id="advertenciaV" data-bs-backdrop="static" data-bs-keyboard="false"  aria-labelledby="advertenciaVLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="advertenciaVLabel">Importante!</h1>
            </div>
            <div className="modal-body">
                <div className="alert alert-light" role="alert">
                    Ooops, parece que no has ingresado ninguna variable, por favor ingresa al menos una variable para continuar.
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-primary"  onClick={irProposiciones}>Configuracion</button>
            </div>
            </div>
        </div>
        </div>

    )
}




