import React, { Component } from 'react';
import { connect } from 'react-redux';

class PlantList extends Component {

    componentDidMount() {
        this.props.dispatch( { type: 'ADD_PLANT' } );
}


handleDelete = (plant) => {
    this.props.dispatch({
        type: "DELETE_PROJECT",
        payload: project.id
    })
}
 

    render() {
        return (
            // </Header>
            <div>
                <h1>Kingman Douglass</h1>

            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(PlantList);