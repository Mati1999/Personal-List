import React from 'react';
// import styled from 'styled-components';
import Formulario from './Componentes/Formulario';
import Lista from './Componentes/Lista';


const App = () => {
  return (
    <div className="container-fluid">

      <div className="d-flex flex-column align-items-center">

        <h1>Mati's Personal List</h1>
        <Formulario />
        <Lista />

      </div>

    </div>

  );
}

export default App;