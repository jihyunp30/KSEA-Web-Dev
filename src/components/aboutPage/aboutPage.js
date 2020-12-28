import React, { Component } from "react";
import "./aboutPage.css";
import purdueLogo from "./image/KSEA YG PURDUE LOGO.png";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

function AboutPage(props) {
    return (
      <div className="App">
        {/*Skeleton Code Starts*/}
        <div className="logo-container">
          <a href="#">
            <img
              src={purdueLogo}
              alt="KSEA YG PURDUE"
              width="350"
              height="110"
            />
          </a>
        </div>

        <div className="navbar">
          <nav
            className="navbar navbar-expand-sm"
            style={{ backgroundColor: "#82918b" }}
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  HOME
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdown03"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  ABOUT<span className="sr-only">(current)</span>
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdown03">
                  <a
                    className="dropdown-item"
                    href="#"
                    style={{ color: "#82918b" }}
                  >
                    동아리 소개
                  </a>
                  <a
                    className="dropdown-item"
                    href="members.html"
                    style={{ color: "#82918b" }}
                  >
                    멤버 소개
                  </a>
                  <a
                    className="dropdown-item"
                    href="events.html"
                    style={{ color: "#82918b" }}
                  >
                    이벤트 소개
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  CALANDAR
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  RESEARCH
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  NEWS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  PHOTO
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  CONTACT
                </a>
              </li>
            </ul>
            <form className="form-inline my-2 my-md-0">
              <input
                className="form-control"
                type="text"
                placeholder="Search"
              />
            </form>
          </nav>
        </div>
        {/*Skeleton Code Ends*/}

        <div class="starter-template">
          <h1>KSEA란?</h1>
          <p class="lead">
            KSEA는 한국에 있는 재미한인과학기술자협회이다. 우리는 1971년부터
            시작된 비영리 전문 단체이며, 미국 전역에 있고, 6000명 이상의
            멤버들과 70개 이상의 지역별 ‘Young Generation’ 이 Purdue, UCLA,
            Georgia Tech, Duke, USC, UC Berkeley 대학들에 있다. KSEA의 주
            활동들은 UKC, NMSC, SEED 등이 있다. 우리는 학생들이 다양한
            학술행사를 통해 진로를 개발하고 네트워크를 형성할 수 있도록 돕는다.
          </p>
        </div>
      </div>
    );
}

export default App;
