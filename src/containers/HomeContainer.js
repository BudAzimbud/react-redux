import React, { Component } from 'react';
import TableComponents from '../components/TableComponents'
import { connect } from "react-redux";
import { getUserList } from '../actions/userAction';

class HomeContainer extends Component {

    componentDidMount() {
        this.props.dispatch(getUserList())
    }


    render() {
        return (
            <div>
                <TableComponents />
            </div>
        );
    }
}

export default connect()(HomeContainer);