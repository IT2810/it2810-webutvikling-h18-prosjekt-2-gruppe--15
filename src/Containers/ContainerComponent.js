import React, {Component} from "react";
import SVGImageContainer from "./SVGImageContainer";
import PoemContainer from "./PoemContainer";
import Mediaplayer from "../media/Mediaplayer";


class ContainerComponent extends Component{

    /*constructor med både poem og svg? hva med lyd??*/

    /*funksjon for å hente poem og hente svg finnes, men hva med hele containern?*/
    /*ha denne containern med containere i ? hvordan funker dette ift render?*/

    render() {
        let svgUrl = this.props.data[this.props.categoryKey].svgUrl[this.props.svgKey];
        let poemUrl = this.props.data[this.props.categoryKey].poemUrl[this.props.poemKey];
        let mp3Url = this.props.data[this.props.categoryKey].mp3Url[this.props.audioKey];

        return <div className="container">
            <SVGImageContainer url={svgUrl}/>
            <PoemContainer url={poemUrl}/>
            <Mediaplayer url={mp3Url} />
        </div>
    }


}

export default ContainerComponent;