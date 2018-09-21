import React, {Component} from "react";
import SVGImageContainer from "./SVGImageContainer";
import PoemContainer from "./PoemContainer";
import Mediaplayer from "../media/Mediaplayer";

class ContainerComponent extends Component{

    render() {

        return <div>
            <Mediaplayer url={this.props.audioUrl} />
            <div className="container">
                <SVGImageContainer url={this.props.svgUrl}/>
                <PoemContainer url={this.props.poemUrl}/>
            </div>

        </div>
    }


}

export default ContainerComponent;
