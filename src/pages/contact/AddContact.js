import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import config from "../../config";
import { Redirect } from 'react-router-dom'

class AddContact extends Component {

    state = {
        isFormValid: false,
        firstName: '',
        lastName: '',
        age: null,
        submitted: false
    }

    inputAge = React.createRef()

    handleSubmit = (event) => {
        event.preventDefault()
        fetch(config.endpoints.contacts.create, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                age: this.state.age
            })
        }).then(response => {
            console.log("response", response)
            if (response.ok) {
                this.setState({ submitted: true })
            }
        })

    }

    firstNameChange = (event) => {
        console.log("value", event.target.value)
        this.setState({
            firstName: event.target.value
        })
        this.updateValidity()
    }

    lastNameChange = (event) => {
        console.log("value", event.target.value)
        this.setState({
            lastName: event.target.value
        })
        this.updateValidity()
    }

    updateValidity = () => {
        const { firstName, lastName } = this.state
        const age = this.inputAge.current.value
        let valid = false
        if (firstName !== '' && lastName !== '' && age > 0) {
            valid = true;
        }
        this.setState({
            isFormValid: valid
        })
    }

    render() {
        if (this.state.submitted) {
            return <Redirect push to="/"></Redirect>
        }
        return (
            <Container>
                <h3>Add Contact</h3>
                <Row>
                    <Col lg="6">
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group as={Row} controlId="firstName">
                                <Form.Label column sm="2">
                                    Firstname
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control type="text" value={this.state.firstName} onChange={this.firstNameChange} />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="lastName">
                                <Form.Label column sm="2">
                                    Lastname
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control type="text" value={this.state.lastName} onChange={this.lastNameChange} />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="age">
                                <Form.Label column sm="2">
                                    Age
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control ref={this.inputAge} onChange={this.updateValidity} type="number" />
                                </Col>
                            </Form.Group>
                            <Button variant="primary" type="submit" disabled={!this.state.isFormValid}>
                                Create contact
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default AddContact