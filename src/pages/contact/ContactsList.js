
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import config from "../../config"
import "./ContactsList.css"
class ContactsList extends Component {

    state = {
        contacts: []
    }

    componentDidMount = () => {
        console.log("component is mounted")
        this.loadContacts()
    }

    loadContacts = () => {
        fetch(config.endpoints.contacts.read)
            .then(response => {
                console.log("response", response)
                response.json()
                    .then(data => {
                        console.log("data", data)
                        this.setState({
                            contacts: data
                        })
                    })
            })
    }

    deleteContact = (contact) => {
        console.log("delete contact")
        fetch(config.endpoints.contacts.delete + "/" + contact.id, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            console.log("response", response)
            if (response.ok) {
                console.log("Contact deleted")
                this.loadContacts()
            }
        })
    }

    render() {
        const { contacts } = this.state
        return <Container>
            <Row>
                <Col lg="3">
                    <div className="buttons">
                        <Link className="btn btn-primary" to="/add-contact">
                            Add new contact
                        </Link>
                    </div>
                </Col>
                <Col lg="6" of>
                    {contacts.map(contact =>
                        <Card key={contact.id} style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{contact.firstName} {contact.lastName}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{contact.age} years old</Card.Subtitle>
                                <div class="actions">
                                    <FontAwesomeIcon className="icon" icon={faTrash} onClick={() => this.deleteContact(contact)} />
                                    <Link to={`/edit-contact/${contact.id}`} className="linkIcon">
                                        <FontAwesomeIcon className="icon" icon={faEdit} />
                                    </Link>
                                </div>
                            </Card.Body>
                        </Card>
                    )
                    }
                </Col>
            </Row>
        </Container>
    }
}

export default ContactsList