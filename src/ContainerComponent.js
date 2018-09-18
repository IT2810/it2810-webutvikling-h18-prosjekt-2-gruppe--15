import React, {Component} from "react";
import SVGImageContainer from "./SVGImageContainer";
import PoemContainer from "./PoemContainer";

class ContainerComponent extends Component{

    /*constructor med både poem og svg? hva med lyd??*/
    constructor(props){
        super(props);
        this.state = {poemcont:{}, svgcont:{}}
    }

    /*funksjon for å hente poem og hente svg finnes, men hva med hele containern?*/
    /*ha denne containern med containere i ? hvordan funker dette ift render?*/

    render() {
        return <div className="container">
            <SVGImageContainer/>
            <PoemContainer/>
        </div>
    }


}

export default ContainerComponent;