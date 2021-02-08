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

          <Jumbotron id='jumbo_body'>

            <div class = "wrapper">
              <div class = 'jumbo_title'>
                <h1>We are KSEA YG at PURDUE.</h1>
              </div>
            </div>

            <br></br>
            <br></br>

            <div class="column">
              <p className='jumbo_text'>
              KSEA is the Association of Korean Scientists and Engineers in Korea. <br></br><br></br>We are a non-profit professional 
              organization that started in 1971. Cross the United States, we have more than 6,000 members,
              70+ Local 'Young Generation' Chapters in Purdue, UCLA, Georgia Tech, Duke, USC, UC Berkeley, etc. <br></br><br></br>
              The main activities of the KSEA are UKC, NMSC, SEED, etc. We help students develop their career, and make a network 
              through a variety of academic events.
              </p>
            </div>

            <div class="column">
              <p className='jumbo_text'>
                    KSEA는 한국에 있는 재미한인과학기술자협회이다. <br></br><br></br>우리는 1971년부터
                    시작된 비영리 전문 단체이며, 미국 전역에 있고, 6000명 이상의
                    멤버들과 70개 이상의 지역별 ‘Young Generation’ 이 Purdue, UCLA,
                    Georgia Tech, Duke, USC, UC Berkeley 대학들에 있다. KSEA의 주
                    활동들은 UKC, NMSC, SEED 등이 있다. <br></br><br></br>우리는 학생들이 다양한
                    학술행사를 통해 진로를 개발하고 네트워크를 형성할 수 있도록 돕는다.
              </p>
            </div>

              <a href="/events">
                <Button className='jumbo_button'>Learn more</Button>
              </a>

              <br></br><br></br><br></br><br></br>

          </Jumbotron>

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

export default AboutPage