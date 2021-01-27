import React from 'react';
import { ReactComponent as PlusIcono } from './../Imagenes/PlusIcono.svg'

const Formulario = () => {
    return (

        <form className="col-5 mt-5">
            <div className="d-flex mb-3">
                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Descripción de la tarea" aria-describedby="emailHelp" />
                <PlusIcono width="7%" height="7%" />
            </div>
        </form>

    );
}

export default Formulario;