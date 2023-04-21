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
            <div id="heading">
                <div id='heading_text'>
                    <a href = "/">
                    <img alt = "heading_text" width= "300vw" height='auto'  src={logo}/>
                    {/* <img alt = "heading_text" width="500" height="150" src={logo}/> */}
                    </a>
                    <Nav>           
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