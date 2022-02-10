import React, { Component } from 'react';
import TableComponents from '../components/TableComponents'
import { connect } from "react-redux";
import { emptyUser, getUserList } from '../actions/userAction';

class HomeContainer extends Component {

    componentDidMount() {
        this.props.dispatch(getUserList())
        this.props.dispatch(emptyUser())
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