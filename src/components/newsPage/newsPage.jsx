import './newsPage.css';

import firebase, {db} from "../../firebase_setup"

import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'

import logo from '../../assets/KSEA YG PURDUE LOGO.png'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';


function NewsPage(props) {

    const history = useHistory()

    return(
        <div>
            <div id="heading">
                <hr id="top_line"></hr>
                
                <div id='heading_text'>
                    <img width="420" height="132" src={logo} />
                </div>
                <div>
                    <Nav>
                        <NavDropdown id='nav_text' title='About'>
                        <NavDropdown.Item id='nav_subtext' href="/about">About KSEA</NavDropdown.Item>
                        <NavDropdown.Item id='nav_subtext' href="/members">Members</NavDropdown.Item>
                        <NavDropdown.Item id='nav_subtext' href="/events">Events</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link id='nav_text' href="/calendar">Calendar</Nav.Link>
                        <Nav.Link id='nav_text' href="/news">News</Nav.Link>
                        <Nav.Link id='nav_text'>Photo</Nav.Link>
                        <Nav.Link id='nav_text'>Research</Nav.Link>
                    </Nav>
                </div>
            </div>
            <div id='body'>
                <div>
                    <Button onClick={history.push('/writeNews')}>Write</Button>
                </div>

                <Button className ='contact'>Contact Us</Button>

                <footer>
                    KSEA YG Purdue
                    <br></br>
                    In 2020 by web dev team
                </footer>
            </div>
            
        </div>
    )
}

export default NewsPage