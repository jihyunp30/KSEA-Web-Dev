import './aboutPage.css';

import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'


import team_picture from '../../assets/IMG_2629.jpg'
import test_picture from '../../assets/5138BA98-19A9-4C8B-BE4C-8AB0B4AD8A57.png'
import logo from '../../assets/KSEA YG PURDUE LOGO.png'

function AboutPage(props) {
  return (
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
        <hr class="body_line" align="center"></hr>


        <div class='body_jumbo'>
          <Jumbotron id='jumbo_body'>
            <h1 className='jumbo_title'>KSEA YG PURDUE</h1>
            <p className='jumbo_text'>
              KSEA is the Association of Korean Scientists and Engineers in Korea. <br></br><br></br>We are a non-profit professional organization that started in 1971. <br></br>Cross the United States, we have more than 6,000 members,<br></br> 70+ Local 'Young Generation' Chapters in Purdue, UCLA, Georgia Tech, Duke, USC, UC Berkeley, etc. <br></br><br></br>The main activities of the KSEA are UKC, NMSC, SEED, etc. We help students develop their career, and make a network through a variety of academic events.

                    <hr class="body_line" align="center"></hr>
                    KSEA는 한국에 있는 재미한인과학기술자협회이다. <br></br><br></br>우리는 1971년부터
            시작된 비영리 전문 단체이며, 미국 전역에 있고, 6000명 이상의
            멤버들과 70개 이상의 <br></br>지역별 ‘Young Generation’ 이 Purdue, UCLA,
            Georgia Tech, Duke, USC, UC Berkeley 대학들에 있다. <br></br>KSEA의 주
            활동들은 UKC, NMSC, SEED 등이 있다. <br></br><br></br>우리는 학생들이 다양한
            학술행사를 통해 진로를 개발하고 네트워크를 형성할 수 있도록 돕는다.
                  </p>
            <p>
              <a href="/events">
                <Button className='jumbo_button'>Learn more</Button>
              </a>
            </p>
          </Jumbotron>
        </div>
        <hr class="body_line" align="center"></hr>

        <Button className='contact'>Contact Us</Button>

        <footer>
          KSEA YG Purdue
                <br></br>
                In 2020 by web dev team
            </footer>
      </div>

    </div>
  )
}

export default AboutPage