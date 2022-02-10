import React, { Component, useEffect } from 'react';
import { Container } from 'reactstrap';
import ButtonBackComponent from '../components/ButtonBackComponent';
import FormComponent from '../components/FormComponent';
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { editUser, getUserDetail } from '../actions/userAction';
import swal from 'sweetalert';
const mapStateToProps = (state) => {
    return {
        createUser: state.users.userCreate,
    }
}

function EditUserContainer(props) {

    const { id } = useParams()

    useEffect(() => {
        props.dispatch(getUserDetail(id))
    });

    const handleSubmit = (data) => {
        props.dispatch(editUser(data, id))
        swal('your data is edit')
    }

    return (
        <div>
            <ButtonBackComponent />
            <Container>
                <h1>Edit Data</h1>
                <FormComponent onSubmit={(data) => { handleSubmit(data) }} />
            </Container>
        </div>
    );
}

export default connect(mapStateToProps, null)(EditUserContainer);