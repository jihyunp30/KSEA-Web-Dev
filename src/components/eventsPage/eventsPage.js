import './eventsPage.css';

import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'


import team_picture from '../../assets/IMG_2629.jpg'
import test_picture from '../../assets/5138BA98-19A9-4C8B-BE4C-8AB0B4AD8A57.png'
import logo from '../../assets/KSEA YG PURDUE LOGO.png'
import CallOut from '../../assets/Call Out.jpg'
import MajorExhibition from '../../assets/Major Exhibition.jpg'

function EventsPage(props) {
  return (
    <div>
      <div id="heading">
        <hr id="top_line"></hr>

        <div id='heading_text'>
          <a href="/">
            <img alt="heading_text" width="500" height="150" src={logo} />
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
        <hr className="body_line" align="center"></hr>

        <div className="starter-template">
          <h1>What do we do?</h1>
          <p className="lead">KSEA YG PURDUE는 퍼듀의 한인 이공계 학생들의 발전을 위한 여러 이벤트들을 주최하고있습니다.</p>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-4">
            <h3 className="featurette-heading">Callout <span className="text-muted"> 8월</span></h3>
            <p className="lead">퍼듀에 새롭게 입학하는 신입생, 편입생, 복학생, 재학생을 위해 KSEA YG PURDUE를 소개하는 이벤트로 학생들 사이의 친목 도모를 이룰 수 있는 유익한 이벤트입니다.</p>
          </div>
          <div className="col-md-4">
            <img src={CallOut} className="card-img" alt="Call Out" />
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-4 order-md-2">
            <h3 className="featurette-heading">Major Exhibition <span className="text-muted"> 9월</span></h3>
            <p className="lead">각 전공 별 선배와의 만남을 통해 학생들에게 다양한 이공계 전공 정보를 제공하는 이벤트입니다. 전공과 관련된 정보를 공유하고 같은 전공자들과 네트워크를 형성할 수 있는 기회를 가질 수 있습니다.</p>
          </div>
          <div className="col-md-4 order-md-1">
            <img src={MajorExhibition} className="card-img" alt="Major Exhibition" />
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-4">
            <h3 className="featurette-heading">Dinner/Coffee with Professors <span className="text-muted"> 2월</span></h3>
            <p className="lead"> 퍼듀대 한인 교수님들과 함께 식사 또는 커피타임을 가지는 시간을 마련해 학생들이 전공과 관련하여 교수님들로부터 조언을 받으며 다양한 정보를 얻고 졸업 전 미래에 대해 충분한 준비를 할 기회를 제공하는 이벤트입니다.</p>
          </div>
          <div className="col-md-4">
            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="824" height="506" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 824x506"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em">824x506</text></svg>
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-4 order-md-2">
            <h3 className="featurette-heading">KSEA National Math and Science Competition<span className="text-muted"> 4월</span></h3>
            <p className="lead">Headquarters에서 매년 주최하는 초•중•고등학교 수학, 과학 경시대회에 도우미 채점자로 참여하여 교내뿐만 아니라 교외에서도 봉사합니다.</p>
          </div>
          <div className="col-md-4 order-md-1">
            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="824" height="506" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 824x506"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em">824x506</text></svg>
          </div>
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

export default EventsPage