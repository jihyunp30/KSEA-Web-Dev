import './researchPage.css';

import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'


import team_picture from '../../assets/IMG_2629.jpg'
import test_picture from '../../assets/5138BA98-19A9-4C8B-BE4C-8AB0B4AD8A57.png'
import logo from '../../assets/KSEA YG PURDUE LOGO.png'

function ResearchPage(props) {
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

        <div className='body_jumbo'>
          <Jumbotron id='jumbo_body'>

            <div class = "wrapper">
              <div class = 'jumbo_title'>
                <h1>Research</h1>
              </div>
            </div>


            <p className='jumbo_text'>
              INSERT CAPTION HERE
            </p>

            <br></br><br></br>

            <div className="row">
                <div className="col-lg-4">
                  <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#ebe8e6" /><text x="50%" y="50%" fill="#82918b"
                      dy=".3em">140x140</text>
                  </svg>
                  <a href="https://engineering.purdue.edu/ME/Research" className="image fit"><img src="image/mechanicalengineering.jpg" width="400" height="100" alt="Engineering" /></a>
                  <div className="inner">
                    <h3>Mechanical Engineering Research</h3>
                  </div>
                </div>

                <div className="col-lg-4">
                  <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#ebe8e6" /><text x="50%" y="50%" fill="#82918b"
                      dy=".3em">140x140</text>
                  </svg>
                  <a href="https://www.cs.purdue.edu/research/" className="image fit"><img src="images/computerscience.jpg" width="400" height="100" alt="Computer Science"/></a>
                  <div className="inner">
                    <h3>Computer Science Research</h3>
                  </div>
                </div>

                <div className="col-lg-4">
                  <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#ebe8e6" /><text x="50%" y="50%" fill="#82918b"
                      dy=".3em">140x140</text>
                  </svg>
                  <a href="https://engineering.purdue.edu/IE/research" className="image fit"><img src="images/industrialengineering.jpg" width="400" height="100" alt="EngineeringIe"/></a>
                  <div className="inner" >
                    <h3>Industrial Engineeing Research</h3>
                  </div>
                </div>

                <div className="col-lg-4">
                  <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#ebe8e6" /><text x="50%" y="50%" fill="#82918b"
                      dy=".3em">140x140</text>
                  </svg>
                  <a href="https://engineering.purdue.edu/ChE/research" className="image fit"><img src="images/industrialengineering.jpg" width="400" height="100" alt="EngineeringChe" /></a>
                  <div className="inner" >
                    <h3>Chemical Engineeing Research</h3>
                  </div>
                </div>

                <div className="col-lg-4">
                  <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#ebe8e6" /><text x="50%" y="50%" fill="#82918b"
                      dy=".3em">140x140</text>
                  </svg>
                  <a href="https://polytechnic.purdue.edu/office-of-research" className="image fit"><img src="images/industrialengineering.jpg" width="400" height="100" alt="Polytech"/></a>
                  <div className="inner">
                    <h3>Polytechnic Institute Research</h3>
                  </div>
                </div>

                <div className="col-lg-4">
                  <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#ebe8e6" /><text x="50%" y="50%" fill="#82918b"
                      dy=".3em">140x140</text>
                  </svg>
                  <a href="https://www.pharmacy.purdue.edu/research" className="image fit"><img src="images/industrialengineering.jpg" width="400" height="100" alt="Pharmacy" /></a>
                  <div className="inner">
                    <h3>Pharmacy Research</h3>
                    </div>
                  </div>
                </div>

                <br></br><br></br>

          
            
          </Jumbotron>
            </div>
            <hr className="body_line" align="center"></hr>

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

export default ResearchPage