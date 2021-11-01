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
    const researches = snapshot.docs.map((doc) => doc.data());
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
        <div className="post">
          <a href = {"/research/"}>
          <h3>{post.DocumentId()}{post.title} {new Date(post.time.seconds * 1000).toISOString().substring(0, 10)} </h3>
          
          </a>


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

          
        
          <div className="thumbnails">

            <div className="box">
              
              <a href="https://engineering.purdue.edu/ME/Research" className="image fit"><img src={researchpicture1} width="400" height="100" alt="Engineering" />
              <div className="inner">
                <h3>Mechanical Engineering Research</h3>
              </div>
              </a>
            </div>

            <div className="box">
              
              <a href="https://www.cs.purdue.edu/research/" className="image fit"><img src={researchpicture2} width="400" height="100" alt="Computer Science"/>
              <div className="inner">
                <h3>Computer Science Research</h3>
              </div>
              </a>

            </div>

            <div className="box">
              
              <a href="https://engineering.purdue.edu/IE/research" className="image fit"><img src={researchpicture3} width="400" height="100" alt="EngineeringIe"/>
              <div className="inner" >
                <h3>Industrial Engineeing Research</h3>
              </div>
              </a>

            </div>

            <div className="box">
              
              <a href="https://engineering.purdue.edu/ChE/research" className="image fit"><img src={researchpicture4} width="400" height="100" alt="EngineeringChe" />
              <div className="inner" >
                <h3>Chemical Engineeing Research</h3>
              </div>
              </a>

            </div>

            <div className="box">
              
              <a href="https://polytechnic.purdue.edu/office-of-research" className="image fit"><img src={researchpicture5} width="400" height="100" alt="Polytech"/>
              <div className="inner">
                <h3>Polytechnic Institute Research</h3>
              </div>
              </a>

            </div>

            <div className="box">
              
                <a href="https://www.pharmacy.purdue.edu/research" className="image fit"><img src={researchpicture6} width="400" height="100" alt="Pharmacy" />
                <div className="inner">
                  <h3>Pharmacy Research</h3>
                </div>
                </a>

            </div>  
          </div>

          <div >
          {displayposts}
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