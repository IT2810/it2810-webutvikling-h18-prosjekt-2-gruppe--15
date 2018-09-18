import React, { Component } from 'react';
import './App.css';
import ContainerComponent from './ContainerComponent';
import Data from "./urls";

class App extends Component {

    constructor(props){
        super(props);
        //console.log(urlData);
        this.state = {key: "rain", svgIndex: 0, audioIndex: 0, poemIndex: 0, data: Data};
    }

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
                  <ContainerComponent data={this.state.data} />
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
