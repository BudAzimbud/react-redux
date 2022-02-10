import React, { Component, useEffect } from 'react';
import { Container } from 'reactstrap';
import { useLocation, useParams } from 'react-router-dom'
import axios from 'axios'
import { connect } from "react-redux";
import { getUserDetail } from '../actions/userAction';
import DetailComponent from '../components/DetailComponent';
import ButtonBackComponent from '../components/ButtonBackComponent';


function DetailUserContainer(props) {

    const { id } = useParams()

    useEffect(() => {
        props.dispatch(getUserDetail(id))
    });

   

    return (
        < div >
            <ButtonBackComponent />
            <Container>
                <h1>Detail User</h1>
                <DetailComponent />
            </Container>
        </div >
    );
}

export default connect()(DetailUserContainer);