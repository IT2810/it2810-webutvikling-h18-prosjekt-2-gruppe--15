import React from 'react';

class Mp3Controller extends React.Component{
    constructor(props) {
        super(props);
        console.log(props);
        console.log(Object.keys(this.props.audiokeys)[0]);
        this.state = {callback: ((e) => this.props.callback(e))};
        }


    render(){
        return(
            <div>
                <p><strong>Sounds</strong></p>
                <ul>
                    {Object.keys(this.props.audiokeys).map(title =>
                        <li key={title} onClick={(e) => this.useCallback(title)}><a>{title}</a></li>)}
                </ul>
            </div>
        )
}
    useCallback(e){
        this.props.callback(e);
    }
}

export default Mp3Controller;