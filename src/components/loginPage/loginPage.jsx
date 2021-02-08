import './loginPage.css';

import React, { useRef, useState} from 'react'
import { useAuth } from "../../context/AuthContext"
import { useHistory, Redirect } from "react-router-dom"

import firebase, {db} from "../../firebase_setup"

import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Alert, Form } from 'react-bootstrap';

import logo from '../../assets/KSEA YG PURDUE LOGO.png'

function LoginPage(props) {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth();
    const [error, setError] = useState();
    const [loading, setLoading] = useState();
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/posting")
        } catch {
            setError("Failed to log in")
        }

        setLoading(false)
    }

    const { currentUser } = useAuth();
    if (currentUser) {
        return <Redirect to="/" />
    }

    return(
        <div>
            <div id="heading">
                
                <div id='heading_text'>
                    <img width="400" height="120" src={logo} />
                </div>
                <div>
                    <Nav>
                        <NavDropdown id='nav_text' title='About'>
                        <NavDropdown.Item id='nav_subtext' href="/about">About KSEA</NavDropdown.Item>
                        <NavDropdown.Item id='nav_subtext' href="/members">Members</NavDropdown.Item>
                        <NavDropdown.Item id='nav_subtext' href="/events">Events</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link id='nav_text' href="/calendar">Calendar</Nav.Link>
                        <Nav.Link id='nav_text' href="/announcement">Announcement</Nav.Link>
                        <Nav.Link id='nav_text'>Photo</Nav.Link>
                        <Nav.Link id='nav_text'>Research</Nav.Link>
                    </Nav>
                </div>
            </div>
            <div id='body'>
                <div>
                    <Card>
                        <Card.Body>
                            <h2>Log In</h2>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" ref={emailRef} required />
                                </Form.Group>
                                <Form.Group id="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" ref={passwordRef} required />
                                </Form.Group>
                                <Button disabled={loading} type="submut">Log In</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>

                <Button className ='contact'>Contact Us</Button>

                <footer>
                  <br></br>
                  <hr className="body_line" align="center"></hr>
                  KSEA YG Purdue
                  <br></br>
                  In 2020 by web dev team
                </footer>
            </div>
            
        </div>
    )
}

export default LoginPage