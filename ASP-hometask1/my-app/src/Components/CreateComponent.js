import React from "react";

class Create extends React.Component {
    render(){
        return (
        <div>
            <h1>Create</h1>
            <form onSubmit={this.props.createApproach}>
                Id:
                <input type="text" name="idCreate" />

                Name:
                <input type="text" name="nameCreate" />

                Price:
                <input type="text" name="priceCreate" />

                <button id="btn-get">Create</button>
            </form>
        </div>
    )}
}

export default Create;