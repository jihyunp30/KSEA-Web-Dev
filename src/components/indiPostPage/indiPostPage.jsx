import './indiPostPage.css';

import firebase, {db} from "../../firebase_setup"

import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'


import logo from '../../assets/KSEA YG PURDUE LOGO.png'
import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';


function IndiPostPage(props) {

    const { postID } = useParams();

    const [title, setTitle] = useState("")
    const [text, setText] = useState("")
    const [time, setTime] = useState("")

    const getPost = () => {

        function getTitle(documentSnapshot) {
            return documentSnapshot.get('title');
        }
          
        /* db.collection('Users')
        .doc(currentUser.uid)
        .get()
        .then(documentSnapshot => getNFollowers(documentSnapshot))
        .then(nFollowers => {
            setFollowers(nFollowers)
        }); */

    }

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
                        <Nav.Link id='nav_text' href="/announcement">Announcement</Nav.Link>
                        <Nav.Link id='nav_text'>Photo</Nav.Link>
                        <Nav.Link id='nav_text'>Research</Nav.Link>
                    </Nav>
                </div>
            </div>
            <div id='body'>
                <div>
                    <h2>{postID}</h2>
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

export default IndiPostPage