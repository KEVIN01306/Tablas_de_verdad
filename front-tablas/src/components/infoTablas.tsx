


const InfoTablas = () =>  {



    return (
        <div className="container-fluid 100vh cont-documentacion">
            <div className="container">
            <h2 className="text-center">¿Cómo utilizar el generador de tablas de verdad?</h2>
            <br />
                <img src="assets/acercaDe/Guardar.png" alt="" />
                <h4 className="text-center">Paso 1</h4>
                <h5 className="text-center">Configure sus proposiciones</h5>
                <p className="text-center">En la parte derecha se encuentra un menu desplegable donde estara la opcion de 
                    "Configuracion de proposiciones" en donde tendra que seleccionar de 1 a 3 proposiciones 
                    separadas por comas, cuando ya tenga seleccionada sus proposiciones haga clic en el boton "Guardar",
                    no olvide prestar atención a los mensajes que apareceran en el teclado, este le indicara si el ingreso
                    de proposiciones son validas. Una vez guardadas sus proposiciones estarán listas para usar, 
                    dirijase a el menu y haga clic en "Generador".</p>
                <br />
                <img src="assets/acercaDe/Ingresar.png" alt="" />
                <h4 className="text-center">Paso 2</h4>
                <h5 className="text-center">Ingrese su expresión</h5>
                <p className="text-center">Ingrese la expresión lógica que desea evaluar utilizando nuestros símbolos y operadores compatibles.</p>
                <br />
                <img src="assets/acercaDe/Generar.png" alt="" />
                <h4 className="text-center">Paso 3</h4>
                <h5 className="text-center">Genere la tabla</h5>
                <p className="text-center">Haga clic en el botón "Generar" para crear su tabla de verdad. Nuestra herramienta procesará
                su expresión y mostrará una tabla completa que muestra todos los resultados posibles según las combinaciones lógicas.</p>
                <br />
                <img src="assets/acercaDe/Analizar.png" alt="" />
                <h4 className="text-center">Paso 4</h4>
                <h5 className="text-center">Analizar resultados</h5>
                <p className="text-center">Revise la tabla para comprender como interatúan las diferentes operaciones lógicas.</p>
            </div>

        </div>
    )
}


export default InfoTablas;