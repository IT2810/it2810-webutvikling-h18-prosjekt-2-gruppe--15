import React, {Component} from "react";
/*
* PoemContainer:
* @author: Ebbbzzz
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
        /*this.state = {svgUrl: "", svg: "<svg> <text> Placeholder SVG </text></svg>", loadedSvgs:{}};*/
        /* ^ slik er den i svg, her har du url som "" mens i poems har du url som hele 'lista' med alt, hvordan få dette til å funke med koden*/
        this.state = {
            poemUrl: "",
            poem:{author: "None", title: "None", verses: ["Poem not loaded"], date: "None"},
            loadedPoems:{}}
    }

    getPoem() {
        let relativeURL = this.props.url;
        if (!(relativeURL.valueOf() === this.state.poemUrl.valueOf())) {
            // "Is the url in we're requesting already in loadedPoems?"
            if (Object.keys(this.state.loadedPoems).indexOf(relativeURL) >= 0) {
                /* Poem is found in registry of loaded Poems */
                this.setState({
                    ...this.state,
                    poemUrl: relativeURL,
                    poem: this.state.loadedPoems[relativeURL].poem
                });
                // Url is not found - we have not loaded this SVG yet.
            }
            else {
                /*Uses AJAX to get poem as a JSON. JSON object is loaded into poem in state. state-variable is only ready for one poem. */
                console.log(relativeURL);

                fetch(relativeURL)
                    .then(responce => responce.json())
                    .then(responseJson => {
                        let updatedLoadedPoems = this.state.loadedPoems;
                        updatedLoadedPoems[relativeURL] = responseJson;
                        console.log(responseJson.poem);
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

    //TODO: Change trigger-event for this.getPoem
    componentDidMount(){
        this.getPoem();
    }
    componentDidUpdate(){
        if (!(this.props.url.valueOf() === this.state.poemUrl.valueOf())) {
            this.getPoem();
        }
    }

    getDate(){
        if(this.state.poem.date !== "None"){
            return <p><i>{this.state.poem.date}</i></p>
        }else{
            return null
        }
    }

    render() {
        console.log(this.state);
        let verses = this.state.poem["verses"];
        return (
            //TODO: Avoid null-errors if needed
            <div className="poemCont">
                {/* Traverses the list verves, wrapping every element in a <p>-tag. To use more variables like year,
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