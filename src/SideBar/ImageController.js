import React, {Component} from 'react';

class ImageController extends Component{
    constructor(props){
        super(props);
        console.log(Object.keys(this.props.SvgKeys)[0]);
        this.state={callback: ((e) => this.props.callback(e))};
    }



    render() {
        return (
            <div>
                <p><strong>Images</strong></p>
                <ul>
                    {Object.keys(this.props.SvgKeys).map(title =>
                        <li key={title} onClick={(e) => this.useCallback({title})}><a>{title}</a></li>)}
                </ul>
            </div>
        );
    }

    useCallback(e){
        this.props.callback(e);
    }
}

export default  ImageController;