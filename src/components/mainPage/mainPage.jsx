import './mainPage.css';

import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'


import team_picture from '../../assets/IMG_2629.jpg'
import test_picture from '../../assets/5138BA98-19A9-4C8B-BE4C-8AB0B4AD8A57.png'
import logo from '../../assets/KSEA YG PURDUE LOGO.png'

function MainPage(props) {
    return(
        <div>
            <div id="heading">
                <hr id="top_line"></hr>
                
                <div id='heading_text'>
                    <a href = "/">
                    <img alt = "heading_text" width="500" height="150" src={logo}/>
                    </a>
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
                        <Nav.Link id='nav_text' href="/research">Research</Nav.Link>
                    </Nav>
                </div>
            </div>
            <div id='body'>
                <div id='body_carousel'>
                    <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={team_picture}
                            alt="First slide"
                            />
                            <Carousel.Caption className = 'carousel_body'>
                            <h3>Welcome to KSEA YG Purdue</h3>
                            <br></br>
                            <p>During our first zoom meeting..?</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={test_picture}
                            alt="Second slide"
                            />
                            <Carousel.Caption className = 'carousel_body'>
                            <h3>Welcome to KSEA YG Purdue</h3>
                            <br></br>
                            <p>During our first zoom meeting..?</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <hr class="body_line" align="center"></hr>
                <div class = 'body_card'>
                    <Card className="text-center">
                        <Card.Header id='card_header'>New Announcement</Card.Header>
                        <Card.Body id='card_body'>
                            <Card.Title className ='card_title'>Announcement title</Card.Title>
                            <Card.Text className ='card_text'>
                            Announcement Text
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                </div>
                <hr class="body_line" align="center"></hr>

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

export default MainPage