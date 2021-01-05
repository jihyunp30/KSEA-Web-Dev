import './mainPage.css';

import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Image from 'react-bootstrap/Image'


import team_picture from '../../assets/IMG_2629.jpg'
import test_picture from '../../assets/5138BA98-19A9-4C8B-BE4C-8AB0B4AD8A57.png'
import logo from '../../assets/KSEA YG PURDUE LOGO.png'

function MainPage(props) {
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
                        <Nav.Link id='nav_text'>News</Nav.Link>
                        <Nav.Link id='nav_text'>Photo</Nav.Link>
                        <Nav.Link id='nav_text'>Research</Nav.Link>
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
                <hr class="body_line" align="left"></hr>
                <div class = 'body_card'>
                    <Card className="text-center">
                        <Card.Header id='card_header'>New Announcement</Card.Header>
                        <Card.Body id='card_body'>
                            <Card.Title className ='card_title'>Announcement title</Card.Title>
                            <Card.Text className ='card_text'>
                            Announcement Text
                            </Card.Text>
                            <Button className ='card_button'>Go to Announcement</Button>
                        </Card.Body>
                    </Card>
                </div>
                <hr class="body_line" align="left"></hr>
                <div class='body_jumbo'>
                    <Jumbotron id='jumbo_body'>
                        <h1 className='jumbo_title'>KSEA YG PURDUE</h1>
                        <p className='jumbo_text'>
                        KSEA is the Association of Korean Scientists and Engineers in Korea. We are a non-profit professional organization that started in 1971. Cross the United States, we have more than 6,000 members, 70+ Local 'Young Generation' Chapters in Purdue, UCLA, Georgia Tech, Duke, USC, UC Berkeley, etc. The main activities of the KSEA are UKC, NMSC, SEED, etc. We help students develop their career, and make a network through a variety of academic events.
                        </p>
                        <p>
                            <Button className ='jumbo_button'>Learn more</Button>
                        </p>
                    </Jumbotron>
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

export default MainPage