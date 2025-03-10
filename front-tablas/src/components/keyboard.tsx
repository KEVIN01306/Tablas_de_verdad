import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { ModalInformacionE,ModalInformacionP,ModalNotVariables } from "./modal";
import { Modal } from "bootstrap";


const TittleKeyboard = () => {
    return (
        <h1 style={{ verticalAlign: "inherit" }} className="tittle-keyboard colorFull">
            Generador de tablas de verdad
        </h1>
    );
};

const HeaderKeyboard = ({ operacion, clearInput,modal }: { operacion: string; clearInput: () => void;modal: boolean }) => {
    
    return (
        <div className="container-input-keyboard row">
            <input
                className="combinalos col-7 col-md-9"
                type="text"
                placeholder="Ingresa las operaciones"
                value={operacion}
                readOnly
            />
            <button className="combinalos col-2 col-md-1" onClick={clearInput}>
                <i className="bi bi-trash3"></i>
            </button>
            <button className="combinalos col-2 col-md-1" data-bs-toggle="modal" data-bs-target={`${modal ? "#informacion-m-p": "#informacion-m"}`}>
                <i className="bi bi-info"></i>
            </button>
        </div>
    );
};

const Tecla = ({
    value,
    type_,
    descripcion,
    onClick,
}: {
    value: React.ReactNode;
    type_?: string;
    descripcion?: string;
    onClick: () => void;
}) => {
    return (
        <button className={`tecla-keyboard col-2-my ${type_}`} onClick={onClick}>
            {value} <span className="descripcion-tecla-keyboard">{descripcion}</span>
        </button>
    );
};

const TeclasKeyboard = ({ agregarCaracter, borrarUltimo }: { agregarCaracter: (val: string) => void; borrarUltimo: () => void }) => {
        const cerrarBackdrop = () => {
            setTimeout(() => {
                document.querySelectorAll(".modal-backdrop").forEach(backdrop => backdrop.remove());
                document.body.classList.remove("modal-open");
                document.body.style.overflow = "auto"; 
            }, 300); 
        };
        const valorString = localStorage.getItem("Proposiciones") ;
        console.log("ValorString:",valorString);
        const modalElement = document.getElementById('advertenciaV');
        if (modalElement) {  
            const modal = new Modal(modalElement);
            if (valorString === null){
                cerrarBackdrop();
                modal.show();
            }
        }

    const valor = valorString ? JSON.parse(valorString) : [];
    return (
        <div className="container-teclas-keyboard row">
            <Tecla value={valor[0] ? valor[0] : ""} type_="btn-yellow" onClick={() => agregarCaracter(valor[0] ? valor[0] : "")} />
            <Tecla value="∧" descripcion="Y" onClick={() => agregarCaracter("∧")} />
            <Tecla value="∨" descripcion="O" onClick={() => agregarCaracter("∨")} />
            <Tecla value="~" descripcion="NO" onClick={() => agregarCaracter("~")} />
            <Tecla value="," descripcion="coma" onClick={() => agregarCaracter(",")} />
            <Tecla value={<i className="bi bi-backspace"></i>} type_="btn-red" onClick={borrarUltimo} />
            <Tecla value={valor[1] ? valor[1] : ""} type_="btn-yellow" onClick={() => agregarCaracter(valor[1] ? valor[1] : "")} />
            <Tecla value="" descripcion="" onClick={() => agregarCaracter("")} />
            <Tecla value="→" descripcion="Condicional" onClick={() => agregarCaracter("→")} />
            <Tecla value="⊕" descripcion="⊻" onClick={() => agregarCaracter("⊕")} />
            <Tecla value="(" descripcion="Parentesis" onClick={() => agregarCaracter("(")} />
            <Tecla value="T" type_="btn-red" onClick={() => agregarCaracter("T")} />
            <Tecla value={valor[2] ? valor[2] : ""} type_="btn-yellow" onClick={() => agregarCaracter(valor[2] ? valor[2] : "")} />
            <Tecla value="" descripcion="" onClick={() => agregarCaracter("")} />
            <Tecla value="↔" descripcion="Bicondicional" onClick={() => agregarCaracter("↔")} />
            <Tecla value="¬" descripcion="Negación" onClick={() => agregarCaracter("¬")} />
            <Tecla value=")" descripcion="Paréntesis" onClick={() => agregarCaracter(")")} />
            <Tecla value="F" type_="btn-red" onClick={() => agregarCaracter("F")} />
        </div>
    );
};


const TeclasKeyboardPropositions = ({ agregarCaracter, borrarUltimo }: { agregarCaracter: (val: string) => void; borrarUltimo: () => void }) => {
    return (
        <div className="container-teclas-keyboard row">
            <Tecla value="A" type_="btn-yellow" onClick={() => agregarCaracter("A")} />
            <Tecla value="B" type_="btn-yellow" onClick={() => agregarCaracter("B")} />
            <Tecla value="C" type_="btn-yellow" onClick={() => agregarCaracter("C")} />
            <Tecla value="D" type_="btn-yellow" onClick={() => agregarCaracter("D")} />
            <Tecla value="," descripcion="coma" onClick={() => agregarCaracter(",")} />
            <Tecla value={<i className="bi bi-backspace"></i>} type_="btn-red" onClick={borrarUltimo} />
            <Tecla value="F" type_="btn-yellow" onClick={() => agregarCaracter("F")} />
            <Tecla value="G" type_="btn-yellow" onClick={() => agregarCaracter("G")} />
            <Tecla value="H" type_="btn-yellow" onClick={() => agregarCaracter("H")} />
            <Tecla value="J" type_="btn-yellow" onClick={() => agregarCaracter("J")} />
            <Tecla value="K" type_="btn-yellow" onClick={() => agregarCaracter("K")} />
            <Tecla value="L" type_="btn-yellow" onClick={() => agregarCaracter("L")} />
            <Tecla value="M" type_="btn-yellow" onClick={() => agregarCaracter("M")} />
            <Tecla value="N" type_="btn-yellow" onClick={() => agregarCaracter("N")} />
            <Tecla value="O" type_="btn-yellow" onClick={() => agregarCaracter("O")} />
            <Tecla value="P" type_="btn-yellow" onClick={() => agregarCaracter("P")} />
            <Tecla value="Q" type_="btn-yellow" onClick={() => agregarCaracter("Q")} />
            <Tecla value="R" type_="btn-yellow" onClick={() => agregarCaracter("R")} />
            <Tecla value="S" type_="btn-yellow" onClick={() => agregarCaracter("S")} />
            <Tecla value="U" type_="btn-yellow" onClick={() => agregarCaracter("U")} />
            <Tecla value="W" type_="btn-yellow" onClick={() => agregarCaracter("W")} />
            <Tecla value="X" type_="btn-yellow" onClick={() => agregarCaracter("X")} />
            <Tecla value="Y" type_="btn-yellow" onClick={() => agregarCaracter("Y")} />
            <Tecla value="Z" type_="btn-yellow" onClick={() => agregarCaracter("Z")} />
        </div>
    );
};


const ButtonAccion = ({onClick,name}:{onClick: () => void;name:string}) => {
    return <button className="btn-generar-tabla" onClick={onClick}>{name}</button>;
};

const Keyboard = () => {

    const API_URL = import.meta.env.VITE_API_URL;
    
    const [operacion, setOperacion] = useState("");
    const [comentario,setComentario]= useState("");
    const valorString = localStorage.getItem("Proposiciones");
    const valor = valorString ? JSON.parse(valorString) : [];



    const agregarCaracter = (caracter: string) => {
        setOperacion((prev) => prev + caracter);
    };

    const borrarUltimo = () => {
        setOperacion((prev) => prev.slice(0, -1));
    };

    const clearInput = () => {
        setOperacion("");
    };

    const { id } = useParams();

    const [modalC,setModalC] = useState(false)

    useEffect(() => {
        clearInput()
        if (id === "TableVariables") {
            setModalC(true)
            setComentario("Escoge tus Proposiciones");
        } else {
            setComentario("¿Te sientes confundido? ¿Qué tal A ∧ B? ¡Explora más para dominarlo!");
            setModalC(false)
        }
    }, [id]);




    const createTable = async () => {
        try {
            const response = await fetch(`${API_URL}/api/generateTruthTable`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ proposiciones: valor }),
            });

            if (!response.ok) {
                throw new Error("Error en la solicitud");
            }

            const data = await response.json();
            console.log("Response tablas:", data);
            await localStorage.setItem("tablas", JSON.stringify(data));
            createTableComplete();
        } catch (error) {
            console.error(error);
        }
    };

    const createTableComplete = async () => {
        try {
            const response = await fetch(`${API_URL}/api/generateTruthTableComplete`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ data: JSON.parse(localStorage.getItem("tablas")!),expressions: JSON.parse(localStorage.getItem("expresiones")!)}),
            });

            if (!response.ok) {
                throw new Error("Error en la solicitud");
            }

            const data = await response.json();
            console.log("Response tablas:", data);
            localStorage.setItem("tablas", JSON.stringify(data));
        } catch (error) {
            console.error(error);
        }
    };



    const recepcionExpresiones = async () => {
        try {
            const response = await fetch(`${API_URL}/api/recepcionExpresiones`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ expresiones: operacion }),
            });

            if (!response.ok) {
                setComentario(await response.json())
                throw new Error("Error en la solicitud");
            }

            const data = await response.json();
            console.log("Response Data:", data);
            setComentario(`Las nuevas expresiones son: ${data}`)
            localStorage.setItem("expresiones", JSON.stringify(data));
            createTable();
        } catch (error) {
            console.error(error);
        }
    };

    const recepcionProposiciones = async () => {
        try {
            const response = await fetch(`${API_URL}/api/receptionPropositions`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ proposiciones: operacion }),
            });

            setComentario("Cargando...");

            if (!response.ok) {
                        setComentario(await response.json())
                        throw new Error("Error en la solicitud");
            }

            const data = await response.json();
            console.log("Response Data:", data);
            

            setTimeout(() => {
                setComentario(`Las nuevas proposiciones son: ${(data)}`);
                localStorage.setItem("Proposiciones", JSON.stringify(data));
            }, 1000);
    

        } catch (error) {
            console.error(error);
        }
    };

    const changeComponenteKeyboard = () =>{
        if (id == "TableVariables"){
            return <><TeclasKeyboardPropositions agregarCaracter={agregarCaracter} borrarUltimo={borrarUltimo} />
                    <ButtonAccion onClick={recepcionProposiciones} name="Guardar" /></>;
        }else {
            return <><TeclasKeyboard agregarCaracter={agregarCaracter} borrarUltimo={borrarUltimo} /> <ButtonAccion onClick={recepcionExpresiones} name="Generar" /></>
        }
    }

    return (
        <>
            <ModalNotVariables/>
            <ModalInformacionE/>
            <ModalInformacionP/>
            <TittleKeyboard />
            <div className={`container-keyboard d-flex flex-column`} id="keyboard">
                <HeaderKeyboard operacion={operacion} clearInput={clearInput} modal={modalC} />
                <div className="container-comentario-keyboard">
                    <p className="comentario-keyboard colorFull">
                        {comentario}
                    </p>
                </div>
                {changeComponenteKeyboard()}            
            </div>
        </>
    );
};

export default Keyboard;
