import React, { Component } from 'react';

import './App.css';

import NavBar from "./NavBar/NavBar";
import SideBar from "./SideBar/SideBar";
import ContainerComponent from './Containers/ContainerComponent';
import ImageController from './SideBar/ImageController';
import Data from "./urls";
import Mp3Controller from "./media/Mp3Controller";

class App extends Component {
    constructor(props) {
        super(props);
        //console.log(urlData);
        this.state = {key: "rain", svgKey: "Happy Rain", audioKey: "Pouring Rain", poemKey: "Raining", data: Data, sideDrawerOpen: false};
        this.changeSvgKey = this.changeSvgKey.bind(this);
        this.changeAudiokey = this.changeAudiokey.bind(this);
        this.drawerToggleClick = this.drawerToggleClick.bind(this);
    }
    render(){
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Prosjekt 2</h1>
                    <h3 className="App-undertitle">IT2810</h3>
                </header>
                <main>
                    <div id="nav">
                        {/*nav bar */}
                        <NavBar drawerClickHandler={this.drawerToggleClick}/>
                        <SideBar show={this.state.sideDrawerOpen} click={this.drawerToggleClick}>
                            <ImageController callback={(e) => this.changeSvgKey(e)}
                                             SvgKeys={Data[this.state.key].svgUrl}/>
                            <Mp3Controller callback={(e) => this.changeAudiokey(e)}
                                           audiokeys={Data[this.state.key].mp3Url}/>
                        </SideBar>

                    </div>
                    {/*Replaces the div-placeholder from earlier versions. Keep the SVGImageContainer.
            -Jonas */}
                    <ContainerComponent data={this.state.data} svgKey={this.state.svgKey}
                                        audioKey={this.state.audioKey}/>
                </main>
                {/*<footer>
          <p>vakker footer</p>
      </footer>*/}

            </div>
        );
    }
        changeSvgKey(e)
        {
            try {
                let newSvgKey = e["title"];
                this.setState({
                    ...this.state,
                    svgKey: newSvgKey
                });
            }
            catch (e) {
                console.log(e);
            }
        }
        changeAudiokey(e)
        {
            try {
                let newAudiokey = e["title"];
                this.setState({
                    ...this.state,
                    audioKey: newAudiokey
                });
            } catch (e) {
                console.log(e);
            }
        }
        drawerToggleClick() {
        try{
            let currentState = this.state.sideDrawerOpen;
            this.setState({
                ...this.state,
                sideDrawerOpen: !currentState
            });
        }catch (e) {
            console.log(e);
        }
        }
}
export default App;