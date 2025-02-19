



const TittleKeyboard = () => {

    return (
            <h1 style={{verticalAlign: 'inherit'}} className="tittle-keyboard">
                Generador de tablas de verdad
            </h1>
    )
}

const HeaderKeyboard = () => {

    return (
        <div className="container-input-keyboard row">
            <input className="col-7 col-md-9" type="text" placeholder="Ingresa las operaciones" />
            <button className="col-2 col-md-1"><i className="bi bi-trash3"></i></button>
            <button className="col-2 col-md-1"><i className="bi bi-info"></i></button>
        </div>
    )
}


const Tecla = (props: {value: string,type_?: string}) => {

    return (
        <button className={`tecla-keyboard col-2-my ${props.type_}`}>
            {props.value}
        </button>
    )
}

const TeclasKeyboard = () => {


    return(
        <div className="container-teclas-keyboard row">
            <Tecla value="R" type_="btn-yellow"/><Tecla value="R"/><Tecla value="R"/><Tecla value="R"/><Tecla value="R"/><Tecla value="R" type_="btn-red"/>
            <Tecla value="R" type_="btn-yellow"/><Tecla value="R"/><Tecla value="R"/><Tecla value="R"/><Tecla value="R"/><Tecla value="R" type_="btn-red"/>
            <Tecla value="R" type_="btn-yellow"/><Tecla value="R"/><Tecla value="R"/><Tecla value="R"/><Tecla value="R"/><Tecla value="R" type_="btn-red"/>
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