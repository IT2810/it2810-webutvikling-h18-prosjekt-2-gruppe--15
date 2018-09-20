import React from 'react';

class Mediaplayer extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return(
            <div>
                <audio src={this.props.audioKey} autoPlay={true} />
            </div>
        )
    }
}
export default Mediaplayer;