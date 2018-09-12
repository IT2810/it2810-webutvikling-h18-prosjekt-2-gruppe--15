import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ContainerComponent from './ContainerComponent';


class App extends Component {
  render() {
    return (
      <div className="App">
          <header className="App-header">
              <h1 className="App-title">Fin header</h1>
          </header>
          <main>
              <div id="nav">
                  {/*nav bar */}
                  <button>Press me</button>
              </div>
              <ContainerComponent></ContainerComponent>
              <ContainerComponent></ContainerComponent>
              <ContainerComponent></ContainerComponent>
          </main>
          {/*<footer>
              <p>vakker footer</p>
          </footer>*/}
      </div>
    );
  }
}

export default App;
