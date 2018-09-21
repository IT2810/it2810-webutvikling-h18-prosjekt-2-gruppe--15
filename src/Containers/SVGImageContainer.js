import React,{Component} from "react";

/*
* Imagecontainer using AJAX to load it's own content. For now, loading is triggered by an onMount-event, essentially it runs
* as soon as it's added to the DOM-tree. In the future, this should be changed to another event, or the parent must
* construct components as needed.
* */
class SVGImageContainer extends Component{
    constructor(props){
        super(props);
        this.state = {svgUrl: "", svg: "<svg> <text> Placeholder SVG </text></svg>", loadedSvgs:{}};
    }

    /*
    * If this.props.url != this.state.svgUrl, it will reload the image.
    * NOTE: The first if-statement avoids setting the state infinitely (setstate() triggers componentWillUpdate() which triggers fetchImage().
    *
    * Nested if.statements:
    * 1st level - if property url different from state url?
    * 2nd lever - have we loaded this SVG before?
    *
    * Storing SVGs: Done via a dictionary formatted as {url:"<svg>...<svg>"} (immediately compatible with state svg)
    * This might not be the best practise - redux amongst others have better APIs for this case, but they we're outside the scope
    * of this assignment.
    * */
    fetchImage(){
        let relativeURL = this.props.url;
        if(! (relativeURL.valueOf() === this.state.svgUrl.valueOf())){
            // "Is the url in we're requesting already in loadedSvgs?"
            if(Object.keys(this.state.loadedSvgs).indexOf(relativeURL) >= 0){
                /* SVG is found in registry of loaded SVGs */
                this.setState({
                    ...this.state,
                    svgUrl: relativeURL,
                    svg: this.state.loadedSvgs[relativeURL]
                });
                // Url is not found - we have not loaded this SVG yet.
            }
            else{
                /*AJAX handling: relativeURL looks like '/logo.svg' og /media/images/img.svg. Fetches from public-folder in project
                The text component of the response is the HTML of the object given, ideally a pure SVG and only a SVG.
                In the catch-part, noting happens since the fallback-SVG is set in the constructor, so we're not changing any
                state. */
                fetch(relativeURL)
                    .then(respone => respone.text())
                    .then(rText => {
                        let updatedLoadedSvgs = this.state.loadedSvgs;
                        updatedLoadedSvgs[relativeURL] = rText;
                        this.setState({
                            svgUrl: relativeURL,
                            svg: rText,
                            loadedSvgs: updatedLoadedSvgs
                        });

                    })
                    .catch((error) => {
                        console.log("AJAX failed");
                        console.log(error);
                    });
            }
        }
    }

    /*Triggers for image-fetching: One for creation of element, one for updating.*/
    componentDidMount(){
        this.fetchImage();
    }
    componentDidUpdate(){
        //Check if state actually is outdated before calling which may change the state to avoid infinite loop.
        if(! (this.props.url.valueOf() === this.state.svgUrl.valueOf())){
            this.fetchImage();
        }
    }


    render() {
        return (
            /*BEWARE:
            This is dangerous - this leaves the app highly vulnerable to cross-site scripting.
            * This is only okay because we're only using our own content from our own server with no obvious way to change urls in use.
            * Furthermore, several purifying libraries exist, which would be used if permitted. */
            <div dangerouslySetInnerHTML={{__html: this.state.svg} }>
            </div>
        );
    }
}

// Default values to avoid undefined.
SVGImageContainer.defaultProps = {
    svgKey: '',
    svgUrl: '',
};

export default SVGImageContainer;
