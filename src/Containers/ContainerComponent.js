import React, {Component} from "react";
import SVGImageContainer from "./SVGImageContainer";
import PoemContainer from "./PoemContainer";
import Mediaplayer from "../media/Mediaplayer";


class ContainerComponent extends Component{

    /*constructor med både poem og svg? hva med lyd??*/
    constructor(props){
        super(props);
        this.state={key: "rain"};
    }


    /*funksjon for å hente poem og hente svg finnes, men hva med hele containern?*/
    /*ha denne containern med containere i ? hvordan funker dette ift render?*/

    render() {
        let svgUrl = this.props.data[this.state.key].svgUrl[this.props.svgKey];
        let mp3Url = this.props.data[this.state.key].mp3Url;
        let poemUrl = this.props.data[this.state.key].poemUrl[this.props.poemKey];
        console.log(this.props.svgKey);
        console.log(mp3Url);
        console.log(svgUrl);
        return <div className="container">
            <SVGImageContainer url={svgUrl}/>
            <PoemContainer url={poemUrl}/>
            <Mediaplayer url={mp3Url} />
        </div>
    }


}

export default ContainerComponent;