import React from "react";

class Delete extends React.Component{
    render(){return (
        <form onSubmit={this.props.deleteApproach}>
            <h1>Delete</h1>
                Id:
                <input type="text" name="idD" />
            <button id="btn-get">Delete</button>
        </form>
    )}
}

export default Delete;