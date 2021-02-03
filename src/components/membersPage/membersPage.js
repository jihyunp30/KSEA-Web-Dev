import './membersPage.css';

import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'


import team_picture from '../../assets/IMG_2629.jpg'
import test_picture from '../../assets/5138BA98-19A9-4C8B-BE4C-8AB0B4AD8A57.png'
import logo from '../../assets/KSEA YG PURDUE LOGO.png'

function MembersPage(props) {
  return (
    <div>
      <div id="heading">
        <hr id="top_line"></hr>

        <div id='heading_text'>
          <a href="/">
            <img alt="heading_text" width="500" height="150" src={logo} padding = "0" />
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
            <Nav.Link id='nav_text'>Announcement</Nav.Link>
            <Nav.Link id='nav_text'>Photo</Nav.Link>
            <Nav.Link id='nav_text'>Research</Nav.Link>
          </Nav>
        </div>
      </div>
      <div id='body'>
        <hr className="body_line" align="center"></hr>


        <div className='body_jumbo'>
          <Jumbotron id='jumbo_body'>
            <h1 className='jumbo_title'>Who are we?</h1>
            <p className='jumbo_text'>
              KSEA YG PURDUE는 퍼듀의 한인 이공계 학생들의 발전을 위해 힘쓰는 동아리입니다.
              </p>
            <div className="row">
                <div className="col-lg-4">
                  <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#ebe8e6" /><text x="50%" y="50%" fill="#82918b"
                      dy=".3em">140x140</text>
                  </svg>
                  <h4>김수민 <span className="text-muted"> | President</span></h4>
                  <p>Electrical Engineering</p>
                  <p>kim2419@purdue.edu</p>
                </div>

                <div className="col-lg-4">
                  <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#ebe8e6" /><text x="50%" y="50%" fill="#82918b"
                      dy=".3em">140x140</text>
                  </svg>
                  <h4>조정연 <span className="text-muted"> | Vice President</span></h4>
                  <p>Chemical Engineering</p>
                  <p>cho409@purdue.edu</p>
                </div>

                <div className="col-lg-4">
                  <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#ebe8e6" /><text x="50%" y="50%" fill="#82918b"
                      dy=".3em">140x140</text>
                  </svg>
                  <h4>정윤경 <span className="text-muted"> | Treasurer</span></h4>
                  <p>Chemical Engineering</p>
                  <p>jeong111@purdue.edu</p>
                </div>

                <div className="col-lg-4">
                  <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#ebe8e6" /><text x="50%" y="50%" fill="#82918b"
                      dy=".3em">140x140</text>
                  </svg>
                  <h4>변지현 <span className="text-muted"> | Secretary</span></h4>
                  <p>Computer Science</p>
                  <p>pyunj@purdue.edu</p>
                </div>

                <div className="col-lg-4">
                  <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#ebe8e6" /><text x="50%" y="50%" fill="#82918b"
                      dy=".3em">140x140</text>
                  </svg>
                  <h4>조성완 <span className="text-muted"> | Event Manager</span></h4>
                  <p>Material Science Engineering</p>
                  <p>jo46@purdue.edu</p>
                </div>

                <div className="col-lg-4">
                  <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#ebe8e6" /><text x="50%" y="50%" fill="#82918b"
                      dy=".3em">140x140</text>
                  </svg>
                  <h4>이지원 <span className="text-muted"> | Ad Manager</span></h4>
                  <p>UX Design</p>
                  <p>lee3400@purdue.edu</p>
                </div>

              </div>
          </Jumbotron>
        </div>
        <hr className="body_line" align="center"></hr>

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

export default MembersPage