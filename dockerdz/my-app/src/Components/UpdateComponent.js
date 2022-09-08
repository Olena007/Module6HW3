import React from "react";

class Update extends React.Component {
    render(){
        return (
        <div>
            <h1>Update</h1>
            <form onSubmit={this.props.updateApproach}>
                Id:
                <input type="text" name="idU" />

                Name:
                <input type="text" name="nameU" />

                Price:
                <input type="text" name="priceU" />

                <button id="btn-get">Update</button>
            </form>
        </div>
    )}
}

export default Update;