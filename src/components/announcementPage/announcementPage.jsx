import './announcementPage.css';

import firebase, {db} from "../../firebase_setup"

import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'


import logo from '../../assets/KSEA YG PURDUE LOGO.png'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';


function AnnouncementPage(props) {

    const history = useHistory()

    const routeChange=()=> {
        history.push('/posting');
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
                    <Button onClick={routeChange}>Write</Button>
                </div>

                <Button className ='contact'>Contact Us</Button>

                <footer>
                  <br></br>
                  <hr className="body_line" align="center"></hr>
                  KSEA YG Purdue
                  <br></br>
                  In 2020 by web dev team
                </footer>web dev team
    
            </div>
            
        </div>
    )
}

export default AnnouncementPage