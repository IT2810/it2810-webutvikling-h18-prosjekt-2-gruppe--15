import React, {Component} from "react";
import SVGImageContainer from "./SVGImageContainer";
import PoemContainer from "./PoemContainer";


class ContainerComponent extends Component{

    /*constructor med både poem og svg? hva med lyd??*/
    constructor(props){
        super(props);
        this.state={key: "rain"};
    }


    /*funksjon for å hente poem og hente svg finnes, men hva med hele containern?*/
    /*ha denne containern med containere i ? hvordan funker dette ift render?*/

    render() {
        let svgUrl = this.props.data[this.state.key].svgUrl[0];
        let poemUrl = this.props.data[this.state.key].poem[0];
        return <div className="container">
            <SVGImageContainer url={svgUrl}/>
            <PoemContainer url={poemUrl}/>
        </div>
    }


}

export default ContainerComponent;