import './mainPage.css';

import { useEffect, useState } from 'react';

import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Modal, Form, Toast } from 'react-bootstrap';

import team_picture from '../../assets/IMG_2629.jpg'
import test_picture from '../../assets/5138BA98-19A9-4C8B-BE4C-8AB0B4AD8A57.png'
import logo from '../../assets/KSEA YG PURDUE LOGO.png'

import firebase, {db, storage} from "../../firebase_setup"
import { auto } from '@popperjs/core';



function MainPage(props) {
    const [showContact, setShowContact] = useState(false);
    const [contactName, setContactName] = useState("");
    const [contactEmail, setContactEmail] = useState("");
    const [contactMessage, setContactMessage] = useState("");
    const [contactConfirm, setContactConfirm] = useState("");

    const[announcement, setAnnouncement] = useState([]);

    const [imageUrls, setImageUrls] = useState([]);

    useEffect(() => {
        const fetchAnnouncement = async () => {
            db
            .collection('Announcement')
            .orderBy('time','desc')
            .limit(3)
            .get()
            .then((collections) => {
                const res = collections.docs.map((doc) => {
                    const test = doc.data();
                    test.id = doc.id
                    return test;
                });
                setAnnouncement(res);
            });
        }
 
        fetchAnnouncement();
    }, []);
 
    useEffect(() => {
        const storageRef = storage.ref(); 
        const imagesRef = storageRef.child('Banner/'); 
    
        imagesRef.listAll().then((result) => {
            const promises = result.items.map((item) => item.getDownloadURL());
            Promise.all(promises).then((urls) => {
              setImageUrls(urls);
            }).catch((error) => {
              console.error(error);
            });
          }).catch((error) => {
            console.error(error);
          });
      }, []);

      
    const handleReset = () => {
        setContactConfirm("")
    }
    const handleClose = () => {
        setShowContact(false);
    }
    const handleContact = () => {
        setShowContact(false);
        db.collection("Contact").add({
            name: contactName,
            email: contactEmail,
            message: contactMessage,
        }).then(function(docRef) {
            setContactConfirm("Success")
        }).catch(function(error) {
            setContactConfirm("Failed")
        })

    }
    const handleShow = () => {
        setShowContact(true);
    }

    const [posts, setPosts] = useState([]);

    const fetchposts=async()=>{
    db
    .collection('Announcement')
    .orderBy('time', 'desc')
    .get()
    .then((snapshot) => {
        const researches = snapshot.docs.map((doc) => {
        const test = doc.data();
        test.id = doc.id
         return test;
      });
    setPosts(researches);

    });
    }
    useEffect(() => {
        fetchposts();
    }, [])

    const displayannouncement = posts
    .slice(0,1)
    .map((post) => {
      return (
        <Card.Body id='card_body'>
        <Card.Title className ='card_title'> {post.title}</Card.Title>
        <Card.Text className ='card_text'>
        {post.text.slice(0,50)}...
        </Card.Text>
        <a href = {"/research/" + post.id  } class="btn btn-primary">Learn more</a>

        
    </Card.Body>          
         
        
      );
    });

    return(
        
        <div>
  <div id="banner">
    <div id="banner-content">

    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
</svg>
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
</svg>
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;

<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-messenger" viewBox="0 0 16 16">
  <path d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.639.639 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.639.639 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76zm5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z"/>
</svg>
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;

<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
  <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
</svg>

    </div>
  </div>
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
                        </NavDropdown>
                        <Nav.Link id='nav_text' href="/calendar">Calendar</Nav.Link>
                        <Nav.Link id='nav_text' href="/announcement">Announcement</Nav.Link>
                        <Nav.Link id='nav_text'>Photo</Nav.Link>
                        <Nav.Link id='nav_text' href="/research">Research</Nav.Link> */}
                         {/* <NavDropdown id='nav_text' title='About'>
                        <NavDropdown.Item id='nav_subtext' href="/about">About KSEA</NavDropdown.Item>
                        <NavDropdown.Item id='nav_subtext' href="/members">Members</NavDropdown.Item>
                        <NavDropdown.Item id='nav_subtext' href="/events">Events</NavDropdown.Item>
                        </NavDropdown> */}
                        <Nav.Link id='nav_text' href="/about">About KSEA</Nav.Link>
                        <Nav.Link id='nav_text' href="/members">Members</Nav.Link>
                        <Nav.Link id='nav_text' href="/events">Events</Nav.Link>

                        <Nav.Link id='nav_text' href="/calendar">Calendar</Nav.Link>
                        <Nav.Link id='nav_text' href="/announcement">Announcement</Nav.Link>
                        <Nav.Link id='nav_text'>Photo</Nav.Link>
                        <Nav.Link id='nav_text' href="/research">Research</Nav.Link>
                    </Nav>
                </div>
            </div>





            <div id='body'>

                <div id='body_carousel'>
                    <Carousel>

                  
                    {imageUrls.map((url) => (
                    
                    <Carousel.Item>
                            
                            <img
                            key = {url}
                            className="d-block w-100"
                            src={url}
                            alt="First slide"
                            />
                            <Carousel.Caption className = 'carousel_body'>
                            <h3>Welcome to KSEA YG Purdue</h3>
                            <br></br>
                            <p>During our first zoom meeting..?</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                       
                    </Carousel>
                </div>
                <hr class="body_line" align="center"></hr>
                <div class = 'body_card'>
                    <Card className="text-center">
                        <a href="/announcement">
                            <Card.Header id='card_header'>
                            New Announcement
                            </Card.Header>
                        </a>
                        {announcement.length > 0 ? (
                            announcement.map((item) => (
                            <a href = {"/announcement/" + item.id  }>
                                <Card.Body id='card_body'>
                                    <Card.Title className ='card_title'>
                                        {item.title}
                                    </Card.Title>
                                    <Card.Text className ='card_text'>
                                    {item.text}
                                    </Card.Text>                           
                                </Card.Body>
                            </a>
                        ))) : (
                        <p>No announcements available</p>
                        )}
                        

                    </Card>


                </div>
                <hr class="body_line" align="center"></hr>

                {contactConfirm &&
                    <Toast className = "confirmation" onClose={handleReset}>
                        <Toast.Header>
                        <strong>Thank you for contacting us!</strong>
                    </Toast.Header>
                    <Toast.Body>{contactConfirm}</Toast.Body>
                    </Toast>}

                <Button className ='contact' onClick={handleShow}>Contact Us</Button>
                <Modal show={showContact} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Contact Us</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group>
                                <Form.Label>Name</Form.Label>
                                <Form.Control placeholder="Name" onChange={e => setContactName(e.target.value)}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" onChange={e => setContactEmail(e.target.value)}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={3} onChange={e => setContactMessage(e.target.value)}/>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className ='send' onClick={handleContact}>Send</Button>
                    </Modal.Footer>
                </Modal>

                <footer>
                    KSEA YG Purdue
                    <br></br>
                    In 2020 by web dev team
                </footer>


            </div>

        </div>
    )
}

export default MainPage