import React, {Component} from "react";
/*
* PoemContainer:
* @author: Jonas Giske
*
* Renders a poem based on JSON in property ( <PoemContainer url={"/dir/file.json" />} 
* Expects JSON like:
*  {poem:{
*       author: "John Doe",
*       verses: ["verse 1", "verse 2", ... ]
*       }
*  }
*
*  AJAX triggered by compnentDidMount - trigger may need to be changed.
* */
class PoemContainer extends Component{
    constructor(props){
        super(props);
        this.state = {poem:{author: "None", verses: ["Poem not loaded"]}}
    }


    getPoem(relativeURL){

        /*Uses AJAX to get poem as a JSON. JSON object is loaded into poem in state. state-variable is only ready for one poem. */
        fetch(relativeURL)
            .then(responce => responce.json())
            .then(responseJson => {
                this.setState({poem: responseJson.poem});
                console.log(this.state.data);
            })
            .catch(() => {
                console.log("PoemContainer: AJAX Failed");
                this.setState({poem: {author: "None", verses: ["Poem-loading failed"]}});
            });
    }

    //TODO: Change trigger-event for this.getPoem
    componentDidMount(){
        this.getPoem("/poems/placeholder.json");
    }

    render() {
        let verses = this.state.poem.verses;
        return (
            //TODO: Avoid null-errors if needed
            <div>
                {/* Traverses the list verves, wrapping every element in a <p>-tag. To use more variables like year,
                 add fields to JSON then use i.e. this.state.poem.year */}
                <p>{this.state.poem.author}</p>
                {verses.map((verse, key) => <p key={key}>{verse}</p>)}
            </div>
        );
    }
}
export default PoemContainer;