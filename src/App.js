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
        </div>
        <div className="col-12">

          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="card-link">Card link</a>
              <a href="#" className="card-link">Another link</a>
            </div>
          </div>

        </div>
      </div>
    </ContainerApp>

  );
}

export default App;