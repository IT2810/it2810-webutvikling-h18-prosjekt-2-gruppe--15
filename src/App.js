import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          {/*<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>*/}
          <main>
              <div id="nav">
                  {/*nav bar */}
                  <img src="https://itknowledgeexchange.techtarget.com/overheard/files/2016/08/hamburger-icon.png"></img>
              </div>
              <div class="container">
                  {/* Placeholder bilde for nå, må hente media på annen måte senere.*/}
                  <div class="item" id="picture">

                  </div>
                  <div class="item" id="text">
                      {/*Her må vi hente ut json objekt med AJAX*/}
                      <p> Dette er bare noe vakker placeholde tekst.</p>
                      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae semper quam. Praesent lobortis tellus quis erat condimentum, a bibendum tortor volutpat.</p>
                  </div>
              </div>
          </main>
      </div>
    );
  }
}

export default App;
