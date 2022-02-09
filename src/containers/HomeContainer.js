import React, { Component } from 'react';
import TableComponents from '../components/TableComponents'
class HomeContainer extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <TableComponents  />
            </div>
        );
    }
}

export default HomeContainer;