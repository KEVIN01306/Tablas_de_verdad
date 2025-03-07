import { useState, useEffect } from 'react';
import ChangeData from "./changedata";

const AccionesTable = () => {
    return (
        <div className="Acciones-table row">
            <div className="boolean-binario d-flex justify-content-start align-items-center col-9 col-md-6">
                <div className="combina d-flex justify-content-start align-items-center">
                    <p className='colorFull'>Boolean</p>
                    <ChangeData />
                    <p className='colorFull'>Binario</p>
                </div>
            </div>
            <div className="copiar-tabla  col-3 col-md-6 d-flex justify-content-end align-items-center" id='combina'>
                <button className='combina'>
                    <i className="bi bi-copy"></i>
                    <span className="span-copy"></span>
                </button>
            </div>
        </div>
    );
};

const Table = () => {
    const [headers, setHeaders] = useState<React.ReactNode[]>([]);
    const [rows, setRows] = useState<React.ReactNode[]>([]);

    useEffect(() => {
        const fetchData = () => {
            const storedData = localStorage.getItem("tablas");
            const parsedData = storedData ? JSON.parse(storedData) : {};
            
            const newHeaders = Object.keys(parsedData);
            setHeaders(newHeaders);

            const numRows = newHeaders.length > 0 && Array.isArray(parsedData[newHeaders[0]]) ? parsedData[newHeaders[0]].length : 0;

            const newRows = [];
            for (let i = 0; i < numRows; i++) {
                const cells = newHeaders.map((header, index) => (
                    <td key={index}>{parsedData[header][i].toString()}</td>
                ));
                newRows.push(<tr key={i}>{cells}</tr>);
            }
            setRows(newRows);
        };

        fetchData();

        const intervalId = setInterval(fetchData, 1000);

        return () => clearInterval(intervalId);
    }, []);


    return (
        <section className="result-table-contaier">
            <AccionesTable />
            <div className="container-table">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            {headers.map((header, index) => (
                                <th key={index}>{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {rows.length > 0 
                            ? rows 
                            : <tr><td colSpan={headers.length}>No hay datos disponibles</td></tr>}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Table;