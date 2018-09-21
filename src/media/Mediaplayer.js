import React from 'react';

class Mediaplayer extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
 //Tar inn en props.url fra ContainerComponent, hvor komponenten blir kalt, og lager en enkel musikkspiller.
    render() {
        return(
            <div>
                <audio controls src={this.props.url}></audio>
            </div>
        )
    }
}
export default Mediaplayer;
