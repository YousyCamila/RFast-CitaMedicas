import React from 'react';

function Patients() {
    return (
        <div className="patients-container">
            <button className="boton-atras btn btn-lg btn-primary fs-6">Atrás</button>
            <button className="btn btn-success mb-3">Agregar Paciente</button>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Dirección</th>
                        <th scope="col">Correo Electrónico</th>
                        <th scope="col">Teléfono</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Juan Pérez</td>
                        <td>Calle Falsa 123</td>
                        <td>juan.perez@example.com</td>
                        <td>123456789</td>
                        <td>
                            <button className="btn btn-primary me-2">Modificar</button>
                            <button className="btn btn-danger">Eliminar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Patients;