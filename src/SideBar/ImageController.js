import React, {Component} from 'react';

class ImageController extends Component{
    constructor(props){
        super(props);
        console.log(Object.keys(this.props.SvgKeys)[0]);
        this.state={};
    }



    render() {
        return (
            <div>
                <p><strong>Images</strong></p>
                <ul>
                    {Object.keys(this.props.SvgKeys).map(title =>
                        <li key={title} onClick={this.useCallback()}>{title}</li>)}
                </ul>
            </div>
        );
    }

    useCallback(e){
        this.props.callback(e);
    }
}

export default  ImageController;