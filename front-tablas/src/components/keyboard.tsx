



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


const Tecla = (props: {value: string}) => {

    return (
        <button className="tecla-keyboard col-2-my">
            {props.value}
        </button>
    )
}

const TeclasKeyboard = () => {


    return(
        <div className="container-teclas-keyboard row">
            <Tecla value="R"/><Tecla value="R"/><Tecla value="R"/>
            <Tecla value="R"/><Tecla value="R"/><Tecla value="R"/>
            <Tecla value="R"/><Tecla value="R"/><Tecla value="R"/>
            <Tecla value="R"/><Tecla value="R"/><Tecla value="R"/>
            <Tecla value="R"/><Tecla value="R"/><Tecla value="R"/>
            <Tecla value="R"/><Tecla value="R"/><Tecla value="R"/>
            <Tecla value="R"/><Tecla value="R"/><Tecla value="R"/>
            <Tecla value="R"/><Tecla value="R"/><Tecla value="R"/>
        </div>
    )
}

const Keyboard = () => {

    return (
        <>
            <TittleKeyboard/>
            <div className="container-keyboard d-flex flex-column">
                <HeaderKeyboard/>
                <TeclasKeyboard/>
            </div>
        </>
    )
}

export default Keyboard;