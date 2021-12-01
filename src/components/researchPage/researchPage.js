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

import firebase, {db}  from "../../firebase_setup"
import { useEffect, useState } from 'react';

import './pagination.css';

import ReactPaginate from "react-paginate";

import researchpicture1 from '../../assets/engineering.jpg'
import researchpicture2 from '../../assets/human-factors.jpg'
import researchpicture3 from '../../assets/manufacturing.jpg'
import researchpicture4 from '../../assets/operations-research.jpg'
import researchpicture5 from '../../assets/production-systems.jpg'
import researchpicture6 from '../../assets/polytec.jpg'

function ResearchPage(props) {

const [posts, setPosts] = useState([]);



const fetchposts=async()=>{
  db
  .collection('Research')
  .get()
  .then((snapshot) => {
    const researches = snapshot.docs.map((doc) => {
      const test = doc.data();
      test.id = doc.id
      return test;
    });
    setPosts(researches);
  // const researches = snapshot.docs.map((doc) => doc.data());
  // setPosts(researches);
  });
}



useEffect(() => {
  fetchposts();
}, [])



  const [pageNumber, setPageNumber] = useState(0);

  const postsperpage = 3;
  const pagesVisited = pageNumber * postsperpage;


  const displayposts = posts
    .slice(pagesVisited, pagesVisited + postsperpage)
    .map((post) => {
      return (
        <div class="row">
              <div class="col-md-4">
                <a href = {"/research/" + post.id  }>
                  <h3>{post.title}  </h3>
                </a>
              </div>
              <div class="col-md-4">
                <h5>{new Date(post.time.seconds * 1000).toISOString().substring(0, 10)}</h5>
              </div>
            </div>
          


        
      );
    });


 
  const pageCount = Math.ceil(posts.length / postsperpage);

  
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

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


      <div className='body_jumbo'>
        <Jumbotron id='jumbo_body'>
          <h1 className='jumbo_title'>KSEA YG PURDUE</h1>


          <div class="card-columns">
            <div class="card mt-4" >
              <img class="card-img-top" src={researchpicture1} alt="Engineering"/>
              <div class="card-body text-center">
                <h4 class="card-title">Mechanical Engineering Research</h4>
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>
              </div>
              <a href="https://engineering.purdue.edu/ME/Research" class="btn btn-primary">Learn more</a>

            </div>
            <div class="card mt-4">
              <img class="card-img-top" src={researchpicture1} alt="Computer Science"/>
              <div class="card-body text-center">
                <h4 class="card-title">Computer Science Research</h4>
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>
              </div>
              <a href="https://www.cs.purdue.edu/research/" class="btn btn-primary">Learn more</a>

            </div>
            <div class="card mt-4 ">
              <img src={researchpicture1} class="card-img-top" alt="EngineeringIe"/>
              <div class="card-body text-center">
                <h4 class="card-title">Industrial Engineeing Research</h4>
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>
              </div>
              <a href="https://engineering.purdue.edu/IE/research" class="btn btn-primary">Learn more</a>

            </div>
            <div class="card mt-4 ">
              <img src={researchpicture1} class="card-img-top" alt="EngineeringChe" />
              <div class="card-body text-center">
                <h4 class="card-title">Chemical Engineeing Research</h4>
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>
              </div>
              <a href="https://engineering.purdue.edu/ChE/research" class="btn btn-primary">Learn more</a>

            </div>
            <div class="card mt-4">
              <img src={researchpicture1}  class="card-img-top" alt="Polytech"/>
              <div class="card-body text-center">
                <h4 class="card-title">Polytechnic Institute Research</h4>
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>
              </div>
              <a href="https://polytechnic.purdue.edu/office-of-research" class="btn btn-primary">Learn more</a>

            </div>
            <div class="card mt-4">
              <img src={researchpicture1} class="card-img-top" alt="Pharmacy" />
              <div class="card-body text-center">
                <h4 class="card-title">Pharmacy Research</h4>
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>
              </div>
              <a href="https://www.pharmacy.purdue.edu/research" class="btn btn-primary">Learn more</a>

            </div>
          </div>



          <div >

          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <h5>Title</h5>
              </div>
              <div class="col-md-4">
                <h5>Date</h5>
              </div>
            </div>
        
          {displayposts}
          </div>  
            
             <ReactPaginate
              previousLabel={"Prev"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationBttns"}
              previousLinkClassName={"previousBttn"}
              nextLinkClassName={"nextBttn"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
            />
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

export default ResearchPage