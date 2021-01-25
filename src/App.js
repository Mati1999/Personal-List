import React from 'react';
import styled from 'styled-components';

const ContainerApp = styled.div`
margin: 0;
padding: 0;
box-sizing: border-box;
`

const App = () => {
  return (
    <ContainerApp className="container-fluid">
      <div className="row">
        <div className="navbar navbar-light bg-light">
          <span className="navbar-brand ms-5" >Personal List</span>
          <a class="navbar-brand" href="#">
            <img src="" alt="" width="30" height="30" />
          </a>
        </div>

        <div className="d-flex justify-content-around mt-5 col-12">

          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Tarea</h5>
              <h6 className="card-subtitle mb-2 text-muted">Prioridad</h6>
              <p className="card-text">Descripcion de la Tarea</p>
              <a href="#" className="card-link">Editar</a>
              <a href="#" className="card-link">Completado</a>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Tarea</h5>
              <h6 className="card-subtitle mb-2 text-muted">Prioridad</h6>
              <p className="card-text">Descripcion de la Tarea</p>
              <a href="#" className="card-link">Editar</a>
              <a href="#" className="card-link">Completado</a>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Tarea</h5>
              <h6 className="card-subtitle mb-2 text-muted">Prioridad</h6>
              <p className="card-text">Descripcion de la Tarea</p>
              <a href="#" className="card-link">Editar</a>
              <a href="#" className="card-link">Completado</a>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Tarea</h5>
              <h6 className="card-subtitle mb-2 text-muted">Prioridad</h6>
              <p className="card-text">Descripcion de la Tarea</p>
              <a href="#" className="card-link">Editar</a>
              <a href="#" className="card-link">Completado</a>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Tarea</h5>
              <h6 className="card-subtitle mb-2 text-muted">Prioridad</h6>
              <p className="card-text">Descripcion de la Tarea</p>
              <a href="#" className="card-link">Editar</a>
              <a href="#" className="card-link">Completado</a>
            </div>
          </div>

        </div>

      </div>
    </ContainerApp>

  );
}

export default App;