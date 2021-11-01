import './postPage.css';

import firebase, {db} from "../../firebase_setup"

import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'


import logo from '../../assets/KSEA YG PURDUE LOGO.png'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { render } from '@testing-library/react';


function PostPage(props) {

    const [title, setTitle] = useState("")
    const { collection } = useParams();
    const { postID } = useParams();

    function captializeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    useEffect(() =>  {
        

        function getTitle(documentSnapshot) {
            return documentSnapshot.get('title');
        }
        
        db.collection(captializeFirstLetter(collection)) // 웹사이트에 인풋할땐 각 페이지마다 이름을 바꿔서 넣어준다
        .doc(postID)
        .get()
        .then(documentSnapshot => getTitle(documentSnapshot))
        .then(title => {
            setTitle(title)
        });

    });
        





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
                        <h1>{title}</h1>
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

export default PostPage