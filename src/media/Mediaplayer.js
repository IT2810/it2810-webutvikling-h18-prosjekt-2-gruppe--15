import React from 'react';

class Mediaplayer extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return(
            <div>
                <audio controls src={this.props.url}></audio>
            </div>
        )
    }
}
export default Mediaplayer;
