import React from 'react';

const Lista = () => {
    return (

        <div className="mt-5 col-3">
            <div className="card">
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">Tarea</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Prioridad</h6>
                    <p className="card-text">Descripcion de la Tarea</p>
                    <div className="d-flex justify-content-between">
                        <button className="btn btn-primary">Editar</button>
                        <button className="btn btn-primary">Completado</button>
                        <button className="btn btn-primary">Eliminar</button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Lista;