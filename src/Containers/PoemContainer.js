import React, {Component} from "react";
/*
* PoemContainer:
* @author: Ebba
*
* Renders a poem based on JSON in property ( <PoemContainer url={"/dir/file.json" />}
* Expects JSON like:
*  {poem:{
*       author: "John Doe",
*       verses: ["verse 1", "verse 2", ... ]
*       }
*  }
*
*  AJAX triggered by compnentDidMount
* */
class PoemContainer extends Component{
    constructor(props){
        super(props);
        /*Sets the state of PoemContainer*/
        this.state = {
            poemUrl: "",
            poem:{author: "None", title: "None", verses: ["Poem not loaded"], date: "None"},
            loadedPoems:{}}
    }

    /*Stores Poems via a dictionary */
    getPoem() {
        let relativeURL = this.props.url;
        if (!(relativeURL.valueOf() === this.state.poemUrl.valueOf())) {
            // "Is the url already in loadedPoems?"
            if (Object.keys(this.state.loadedPoems).indexOf(relativeURL) >= 0) {
                /* Gets here when poem is found in registry of loaded Poems */
                this.setState({
                    ...this.state,
                    poemUrl: relativeURL,
                    poem: this.state.loadedPoems[relativeURL].poem
                });
                // Url is not found - we have not loaded this Poem yet.
            }
            else {
                /*Uses AJAX to get poem as a JSON. JSON object is loaded into poem in state. State-variable is only ready for one poem. */
                /*catch: noting happens since the poem is set in the constructor (a fallback).We dont change any state.*/
                fetch(relativeURL)
                    .then(responce => responce.json())
                    .then(responseJson => {
                        let updatedLoadedPoems = this.state.loadedPoems;
                        updatedLoadedPoems[relativeURL] = responseJson;
                        this.setState({
                            poemUrl: relativeURL,
                            poem: responseJson.poem,
                            loadedPoems: updatedLoadedPoems
                        });
                    })
                    .catch(() => {
                        console.log("PoemContainer: AJAX Failed");
                    });
            }

        }
    }

    // Both are triggers for fetching of poems. One is for the creation the other for updating.
    componentDidMount(){
        this.getPoem();
    }

    componentDidUpdate(){
        if (!(this.props.url.valueOf() === this.state.poemUrl.valueOf())) {
            this.getPoem();
        }
    }

    // A function to get the date of the poem (if there is any)
    getDate(){
        if(this.state.poem.date !== "None"){
            return <p><i>{this.state.poem.date}</i></p>
        }else{
            return null
        }
    }

    render() {
        let verses = this.state.poem["verses"];
        return (
            //TODO: Avoid null-errors if needed
            <div className="poemCont">
                {/* Traverses the list verses, wrapping every element in a <p>-tag. To use more variables like year,
                 add fields to JSON then use i.e. this.state.poem.year */}
                <h1>{this.state.poem.title}</h1>
                <p><i>By {this.state.poem.author}</i></p>
                {verses.map((verse, key) => <p key={key}>{verse}</p>)}
                {this.getDate()}
            </div>

        );
    }
}
export default PoemContainer;
