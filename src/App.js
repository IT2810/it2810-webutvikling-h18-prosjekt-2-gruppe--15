import React, { Component } from 'react';
import './App.css';
import ContainerComponent from './ContainerComponent';

import SVGImageContainer from "./SVGImageContainer";
import PoemContainer from "./PoemContainer";

class App extends Component {


  render() {
    return (
      <div className="App">
          <header className="App-header">
              <h1 className="App-title">Fin header</h1>
          </header>
          <main>
              <div className="container" >

                  {/*Replaces the div-placeholder from earlier versions. Keep the SVGImageContainer.
                    -Jonas */}
                  <SVGImageContainer url={"/logo.svg"} />
                  <PoemContainer url={"/poems/placeholder.json"} />
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
