import React, { Component } from 'react';
import './App.css';
import SVGImageContainer from "./SVGImageContainer";

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
              <div className="container" >

                  {/*Replaces the div-placeholder from earlier versions. Keep the SVGImageContainer.
                    -Jonas */}
                  <SVGImageContainer url={"/logo.svg"} />
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
