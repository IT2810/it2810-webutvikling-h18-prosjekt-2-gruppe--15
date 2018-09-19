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

    fetchImage(){
        let relativeURL = this.props.url;
        if(Object.keys(this.state.loadedSvgs).indexOf(relativeURL) >= 0){
            /* SVG is found in registry of loaded SVGs */
            this.setState({
                ...this.state,
                svgUrl: relativeURL,
                svg: this.state.loadedSvgs[relativeURL]
            });

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
                .catch(() => console.log("AJAX failed"));
        }
    }

    /*Runs immediately when component-objecet is added to DOM. Might need changing later*/
    //TODO: Change trigger to CSS-attribute or similar
    componentDidMount(){
        this.fetchImage();
    }

    componentWillReceiveProps(){
        this.fetchImage();
    }



    render() {
        return (
            /*BEWARE: This is, as read below, dangerous - this leaves the app highly vulnerabe to cross-site scripting.
            * This is only okay because a) we're only using our own content from our own server, and b) we're not allowed
            * any puriifying libraries. */
            <div dangerouslySetInnerHTML={{__html: this.state.svg} }>
            </div>
        );
    }
}

export default SVGImageContainer;