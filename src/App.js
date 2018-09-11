import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
              <div className="container">
                  {/* Placeholder bilde for nå, må hente media på annen måte senere.*/}
                  <div className="item" id="picture">
                      <p>Bilde</p>
                      {/*<img src={navn på bildet} className="bilde" alt="Bilde" />*/}
                  </div>
                  <div className="item" id="text">
                      {/*Her må vi hente ut json objekt med AJAX*/}
                      <p> Dette er bare noe vakker placeholde tekst.</p>
                      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae semper quam. Praesent lobortis tellus quis erat condimentum, a bibendum tortor volutpat.</p>
                      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae semper quam. Praesent lobortis tellus quis erat condimentum, a bibendum tortor volutpat.</p>
                      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae semper quam. Praesent lobortis tellus quis erat condimentum, a bibendum tortor volutpat.</p>
                      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae semper quam. Praesent lobortis tellus quis erat condimentum, a bibendum tortor volutpat.</p>
                      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae semper quam. Praesent lobortis tellus quis erat condimentum, a bibendum tortor volutpat.</p>
                      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae semper quam. Praesent lobortis tellus quis erat condimentum, a bibendum tortor volutpat.</p>
                      <p>kek</p>
                      <p>kek</p>
                      <p>kek</p>
                  </div>
              </div>
          </main>
          {/*<footer>
              <p>vakker footer</p>
          </footer>*/}
      </div>
    );
  }
}

export default App;
