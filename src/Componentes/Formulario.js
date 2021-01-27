import React from 'react';

const Formulario = ({ descripcion, cambiarDescripcion, handleChange, handleSubmit }) => {

    return (

        <form className="col-5 mt-5" onSubmit={handleSubmit}>
            <div className="d-flex mb-3">
                <input type="text" className="form-control" placeholder="Descripción de la tarea" aria-label="Username" onChange={handleChange} />
                {/* <PlusIcono as="button" width="7%" height="7%" type="submit" /> */}
                <button className="btn btn-success" as="button" type="submit">
                    Agregar
                </button>
            </div>
        </form>

    );
}

export default Formulario;