import React, {Component} from "react";
import SVGImageContainer from "./SVGImageContainer";
import PoemContainer from "./PoemContainer";
import Mediaplayer from "../media/Mediaplayer";


class ContainerComponent extends Component{

    /*constructor med både poem og svg? hva med lyd??*/

    /*funksjon for å hente poem og hente svg finnes, men hva med hele containern?*/
    /*ha denne containern med containere i ? hvordan funker dette ift render?*/

    render() {

        return <div className="container">
            <SVGImageContainer url={this.props.svgUrl}/>
            <PoemContainer url={this.props.poemUrl}/>
            <Mediaplayer url={this.props.audioUrl} />
        </div>
    }


}

export default ContainerComponent;