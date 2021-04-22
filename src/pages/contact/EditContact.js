import React, { Component } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Redirect } from 'react-router-dom';
import config from "../../config";

class EditContact extends Component {
    state = {
        isFormValid: false,
        firstName: '',
        lastName: '',
        age: null,
        submitted: false,
        id: null
    }

    inputAge = React.createRef()

    componentDidMount = () => {
        let id = this.props.match.params.id;
        console.log("id", id)
        fetch(config.endpoints.contacts.read + "/" + id)
            .then(response => {
                response.json()
                    .then(data => {
                        console.log("contact", data)
                        this.setState({
                            ...data
                        })
                        this.inputAge.current.value = data.age
                    })
            })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch(config.endpoints.contacts.edit, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                age: this.inputAge.current.value,
                id: this.state.id
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
        return (<Container>
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
                            Save contact
                            </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
        )
    }
}

export default EditContact