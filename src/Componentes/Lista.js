import React from 'react';

const Lista = ({ handleSubmit }) => {
    return (

        <div className="mt-5 col-3">
            <div className="card">
                <div className="card-body d-flex justify-content-between">
                    <h5 className="card-title">Tarea</h5>
                    <div className="d-flex">
                        <button className="btn btn-primary btn-sm">Editar</button>
                        <button className="btn btn-primary btn-sm">Completado</button>
                        <button className="btn btn-primary btn-sm">Eliminar</button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Lista;