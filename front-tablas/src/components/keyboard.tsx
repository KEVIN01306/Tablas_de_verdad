import { useState } from "react";

const TittleKeyboard = () => {
    return (
        <h1 style={{ verticalAlign: "inherit" }} className="tittle-keyboard">
            Generador de tablas de verdad
        </h1>
    );
};

const HeaderKeyboard = ({ operacion, clearInput }: { operacion: string; clearInput: () => void }) => {
    return (
        <div className="container-input-keyboard row">
            <input
                className="col-7 col-md-9"
                type="text"
                placeholder="Ingresa las operaciones"
                value={operacion}
                readOnly
            />
            <button className="col-2 col-md-1" onClick={clearInput}>
                <i className="bi bi-trash3"></i>
            </button>
            <button className="col-2 col-md-1">
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
    return (
        <div className="container-teclas-keyboard row">
            <Tecla value="P" type_="btn-yellow" onClick={() => agregarCaracter("P")} />
            <Tecla value="∧" descripcion="Y" onClick={() => agregarCaracter("∧")} />
            <Tecla value="∨" descripcion="O" onClick={() => agregarCaracter("∨")} />
            <Tecla value="~" descripcion="NO" onClick={() => agregarCaracter("~")} />
            <Tecla value="," descripcion="coma" onClick={() => agregarCaracter(",")} />
            <Tecla value={<i className="bi bi-backspace"></i>} type_="btn-red" onClick={borrarUltimo} />
            <Tecla value="Q" type_="btn-yellow" onClick={() => agregarCaracter("Q")} />
            <Tecla value="" descripcion="" onClick={() => agregarCaracter("")} />
            <Tecla value="→" descripcion="Condicional" onClick={() => agregarCaracter("→")} />
            <Tecla value="⊕" descripcion="⊻" onClick={() => agregarCaracter("⊕")} />
            <Tecla value="(" descripcion="Parentesis" onClick={() => agregarCaracter("(")} />
            <Tecla value="T" type_="btn-red" onClick={() => agregarCaracter("T")} />
            <Tecla value="R" type_="btn-yellow" onClick={() => agregarCaracter("R")} />
            <Tecla value="" descripcion="" onClick={() => agregarCaracter("")} />
            <Tecla value="↔" descripcion="Bicondicional" onClick={() => agregarCaracter("↔")} />
            <Tecla value="¬" descripcion="Negación" onClick={() => agregarCaracter("¬")} />
            <Tecla value=")" descripcion="Paréntesis" onClick={() => agregarCaracter(")")} />
            <Tecla value="F" type_="btn-red" onClick={() => agregarCaracter("F")} />
        </div>
    );
};

const GenerarTabla = () => {
    return <button className="btn-generar-tabla">Generar</button>;
};

const Keyboard = () => {
    const [operacion, setOperacion] = useState("");

    const agregarCaracter = (caracter: string) => {
        setOperacion((prev) => prev + caracter);
    };

    const borrarUltimo = () => {
        setOperacion((prev) => prev.slice(0, -1));
    };

    const clearInput = () => {
        setOperacion("");
    };

    return (
        <>
            <TittleKeyboard />
            <div className="container-keyboard d-flex flex-column">
                <HeaderKeyboard operacion={operacion} clearInput={clearInput} />
                <div className="container-comentario-keyboard">
                    <p className="comentario-keyboard">
                        ¿Te sientes confundido? ¿Qué tal A ∧ B? ¡Explora más para dominarlo!
                    </p>
                </div>
                <TeclasKeyboard agregarCaracter={agregarCaracter} borrarUltimo={borrarUltimo} />
                <GenerarTabla />
            </div>
        </>
    );
};

export default Keyboard;
