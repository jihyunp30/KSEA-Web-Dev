import './calendarPage.css';

import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'




import team_picture from '../../assets/IMG_2629.jpg'
import test_picture from '../../assets/5138BA98-19A9-4C8B-BE4C-8AB0B4AD8A57.png'
import logo from '../../assets/KSEA YG PURDUE LOGO.png'

function CalendarPage(props) {
    return (
        <div>
            <div id="heading">

                <div id='heading_text'>
                    <a href="/">
                        <img alt="heading_text" width="400" height="120" src={logo} />
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
                
                <div class='body_jumbo'>
                    <Jumbotron id='jumbo_body'>
                        <h1 className='jumbo_title'></h1>

                        {/*Google API*/}

                    </Jumbotron>
                </div>
                <hr class="body_line" align="center"></hr>

                <Button className='contact'>Contact Us</Button>

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

export default CalendarPage