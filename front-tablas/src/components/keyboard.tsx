
import { useState } from "react";


const TittleKeyboard = () => {

    return (
            <h1 style={{verticalAlign: 'inherit'}} className="tittle-keyboard">
                Generador de tablas de verdad
            </h1>
    )
}

const HeaderKeyboard = () => {
    const [operacion, setOperacion] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOperacion(event.target.value);
    };

    const clearInput = () => {
        setOperacion("");
    }

    return (
        <div className="container-input-keyboard row">
            <input className="col-7 col-md-9" type="text" placeholder="Ingresa las operaciones" 
            value={operacion}
            onChange={handleChange}/>
            <button className="col-2 col-md-1" onClick={clearInput}><i className="bi bi-trash3"></i></button>
            <button className="col-2 col-md-1"><i className="bi bi-info"></i></button>
        </div>
    )
}


const Tecla = (props: {value: React.ReactNode ,type_?: string,descripcion?: string}) => {

    return (
        <button className={`tecla-keyboard col-2-my ${props.type_}`}>
            {props.value} <span className="descripcion-tecla-keyboard">{props.descripcion}</span>
        </button>
    )
}

const TeclasKeyboard = () => {


    return(
        <div className="container-teclas-keyboard row">
            <Tecla value="P" type_="btn-yellow"/><Tecla value="∧" descripcion="Y"/><Tecla value="∨" descripcion="O"/><Tecla value="~" descripcion="NO"/><Tecla value="," descripcion="coma"/><Tecla value={<i className="bi bi-backspace"></i>} type_="btn-red"/>
            <Tecla value="Q" type_="btn-yellow"/><Tecla value=""/><Tecla value="→" descripcion="Condicional"/><Tecla value="⊕" descripcion="⊻"/><Tecla value="(" descripcion="Parentesis"/><Tecla value="T" type_="btn-red"/>
            <Tecla value="R" type_="btn-yellow"/><Tecla value=""/><Tecla value="↔" descripcion="Bicondicional"/><Tecla value="¬" descripcion="Negacion"/><Tecla value=")" descripcion="Parentesis"/><Tecla value="F" type_="btn-red"/>
        </div>
    )
}

const GenerarTabla = () => {
    
    return (
        <button className="btn-generar-tabla">Generar</button>
    )
}

const Keyboard = () => {

    return (
        <>
            <TittleKeyboard/>
            <div className="container-keyboard d-flex flex-column">
                <HeaderKeyboard/>
                <div className="container-comentario-keyboard">
                    <p className="comentario-keyboard">¿Te sientes confundido? ¿Qué tal (A ∧ B)¬C? ¡Explora más para dominarlo!</p>
                </div>
                <TeclasKeyboard/>
                <GenerarTabla/>
            </div>
        </>
    )
}

export default Keyboard;