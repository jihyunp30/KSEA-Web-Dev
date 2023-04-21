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
        
        db.collection('Announcement')
        .doc(postID)
        .get()
        .then(documentSnapshot => getTitle(documentSnapshot))
        .then(title => {
            setTitle(title)
        });


    }

    return(
        <div>
             <div id="heading">
                
                <div id='heading_text'>
                    <a href = "/">
                    <img alt = "heading_text" width= "300vw" height='auto'  src={logo}/>
                    {/* <img alt = "heading_text" width="500" height="150" src={logo}/> */}

                    </a>

                    <Nav>
                        {/* <NavDropdown id='nav_text' title='About'>
                        <NavDropdown.Item id='nav_subtext' href="/about">About KSEA</NavDropdown.Item>
                        <NavDropdown.Item id='nav_subtext' href="/members">Members</NavDropdown.Item>
                        <NavDropdown.Item id='nav_subtext' href="/events">Events</NavDropdown.Item>
                        </NavDropdown> */}
                        {/* <Nav.Link id='nav_text' href="/about">About KSEA</Nav.Link>
                        <Nav.Link id='nav_text' href="/members">Members</Nav.Link>
                        <Nav.Link id='nav_text' href="/events">Events</Nav.Link>

                        <Nav.Link id='nav_text' href="/calendar">Calendar</Nav.Link>
                        <Nav.Link id='nav_text' href="/announcement">Announcement</Nav.Link>
                        <Nav.Link id='nav_text'>Photo</Nav.Link>
                        <Nav.Link id='nav_text' href="/research">Research</Nav.Link> */}

                        <NavDropdown id='nav_text' title='About'>
                        <NavDropdown.Item id='nav_subtext' href="/about">About KSEA</NavDropdown.Item>
                        <NavDropdown.Item id='nav_subtext' href="/members">Members</NavDropdown.Item>
                        <NavDropdown.Item id='nav_subtext' href="/events">Events</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link id='nav_text' href="/calendar">Calendar</Nav.Link>
                        <Nav.Link id='nav_text' href="/announcement">Announcement</Nav.Link>
                        <Nav.Link id='nav_text'>Photo</Nav.Link>
                        <Nav.Link id='nav_text' href="/research">Research</Nav.Link>
                    </Nav>
                </div>
               

            </div>
            <div id='body'>
                <div>
                    <Button onClick={getPost}>Get Post</Button>
                </div>
                <div>
                    <h2>{title}</h2>
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