import React, { Component } from 'react';
import { Container } from 'reactstrap';

class DetailUserComponent extends Component {
    render() {

        console.log(this.props)
        return (
            <div>
                <Container>
                    detail
                </Container>
            </div>
        );
    }
}

export default DetailUserComponent;