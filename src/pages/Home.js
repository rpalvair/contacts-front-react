
import React, { Component } from "react"
import config from "../config"
import { Card, Container, Row, Col } from "react-bootstrap"
import "./Home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"

class Home extends Component {

    state = {
        contacts: []
    }

    componentDidMount = () => {
        console.log("component is mounted")
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

    render() {
        const { contacts } = this.state
        return <Container>
            <Row className="justify-content-md-center">
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
                                    <FontAwesomeIcon className="icon" icon={faTrash} />
                                    <FontAwesomeIcon className="icon" icon={faEdit} />
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

export default Home