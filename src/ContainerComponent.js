import React from "react";

class ContainerComponent extends React.Component{
    render() {
        return <div className="container">
            <div className="item" id="picture">
                <p>Bilde</p>
                {/*<img src={navn på bildet} className="bilde" alt="Bilde" />*/}
            </div>
            <div className="item" id="text">
                {/*Her må vi hente ut json objekt med AJAX*/}
                <p> Dette er bare noe vakker placeholde tekst.</p>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae semper quam. Praesent lobortis tellus quis erat condimentum, a bibendum tortor volutpat.</p>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae semper quam. Praesent lobortis tellus quis erat condimentum, a bibendum tortor volutpat.</p>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae semper quam. Praesent lobortis tellus quis erat condimentum, a bibendum tortor volutpat.</p>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae semper quam. Praesent lobortis tellus quis erat condimentum, a bibendum tortor volutpat.</p>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae semper quam. Praesent lobortis tellus quis erat condimentum, a bibendum tortor volutpat.</p>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae semper quam. Praesent lobortis tellus quis erat condimentum, a bibendum tortor volutpat.</p>
                <p>kek</p>
                <p>kek</p>
                <p>kek</p>
            </div>
        </div>
    }
}

export default ContainerComponent;