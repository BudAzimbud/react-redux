import React, { Component } from 'react';
import TableComponents from '../components/TableComponents'
class HomeContainer extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <TableComponents users={this.props.users} />
            </div>
        );
    }
}

export default HomeContainer;