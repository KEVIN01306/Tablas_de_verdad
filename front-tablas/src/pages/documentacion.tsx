

const AcercaDe = () => {


    return(
        <div className="container 100vh bg-white cont-documentacion">
            <h1 style={{ verticalAlign: "inherit" }} className="tittle-keyboard colorFull">
            Generador de tablas de verdad
            </h1>
            <h2>Introducción</h2>
            <p>¡Bienvenido al generador de tablas de verdad! Una herramienta ideal para crear tablas de verdad
                precisas y detalladas sin esfuerzo. Diseñado para simplificar la evaluación lógica. </p>
            <br />
            <h2>¿Qué es una tabla de verdad?</h2>
            <p>Una tabla de verdad es una herramienta fundamental en lógica, que se utiliza ampliamente en funciones booleanas
                y cálculo proposicional. Enumera sistemáticamente todos los posibles valores de verdad de expresiones lógicas 
                en función de los valores de sus variables lógicas. Esto permite visualizar cómo se deriva el valor de verdad de 
                una expresión completa a partir de sus partes constituyentes.</p>
            <br />
            <div>
                <h2>¿Cómo utilizar el generador de tablas de verdad?</h2>
                <img src="assets/acercaDe/Analizar.png" alt="" />
                <h4>Paso 1</h4>
                <h5>Configure sus proposiciones</h5>
                <p>En la parte derecha se encuentra un menu desplegable donde estara la opcion de 
                    "Configuracion de proposiciones" en donde tendra que seleccionar de 1 a 3 proposiciones 
                    separadas por comas, cuando ya tenga seleccionada sus proposiciones haga clic en el boton "Guardar",
                    no olvide prestar atención a los mensajes que apareceran en el teclado, este le indicara si el ingreso
                    de proposiciones son validas. Una vez guardadas sus proposiciones estarán listas para usar, 
                    dirijase a el menu y haga clic en "Generador".</p>
                <br />
                <img src="assets/acercaDe/Ingresar.png" alt="" />
                <h4>Paso 2</h4>
                <h5>Ingrese su expresión</h5>
                <p>Ingrese la expresión lógica que desea evaluar utilizando nuestros símbolos y operadores compatibles.</p>
                <br />
                <img src="assets/acercaDe/Generar.png" alt="" />
                <h4>Paso 3</h4>
                <h5>Genere la tabla</h5>
                <p>Haga clic en el botón "Generar" para crear su tabla de verdad. Nuestra herramienta procesará
                su expresión y mostrará una tabla completa que muestra todos los resultados posibles según las combinaciones lógicas.</p>
            </div>
            
        </div>
    )
}


export default AcercaDe;