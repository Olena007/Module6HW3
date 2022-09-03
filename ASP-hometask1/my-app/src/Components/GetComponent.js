import React from "react";

class Get extends React.Component{
    render(){return (
        <form onSubmit={this.props.approach}>
            <h1>Get</h1>
                Id:
                <input type="text" name="id" />
            <button id="btn-get">Get</button>
        </form>
    )}
}

export default Get;