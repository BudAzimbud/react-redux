import React, { Component } from 'react';
import { Container } from 'reactstrap';
import ButtonBackComponent from '../components/ButtonBackComponent';
import FormComponent from '../components/FormComponent';
import { connect } from "react-redux";
import { createUser } from '../actions/userAction';
import swal from 'sweetalert';

const mapStateToProps = (state) => {
    return {
        createUser: state.users.userCreate,
    }
}
class CreateUserContainer extends Component {

    handleSubmit(data) {
        this.props.dispatch(createUser(data))
    }

    render() {
        if (this.props.createUser) {
            swal('youve been created')
        }
        return (
            <div>
                <ButtonBackComponent />
                <Container >
                    <h1>Create User</h1>
                    <FormComponent onSubmit={(data) => { this.handleSubmit(data) }} />
                </Container>
            </div>
        );
    }
}

export default connect(mapStateToProps, null)(CreateUserContainer);