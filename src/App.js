import React, { useState } from 'react';
// import styled from 'styled-components';
import Formulario from './Componentes/Formulario';
import Lista from './Componentes/Lista';


const App = () => {

  const [descripcion, cambiarDescripcion] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    cambiarDescripcion(e.target.value);
    console.log(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("shit");
  }

  return (
    <div className="container-fluid">

      <div className="d-flex flex-column align-items-center">

        <h1>Mati's Personal List</h1>
        <Formulario descripcion={descripcion} cambiarDescripcion={cambiarDescripcion} handleChange={handleChange} handleSubmit={handleSubmit} />
        <Lista handleSubmit={handleSubmit} />

      </div>

    </div>

  );
}

export default App;