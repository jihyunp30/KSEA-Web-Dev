import './announcementPage.css';
import firebase, {db} from "../../firebase_setup"
 
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'
 
 
import logo from '../../assets/KSEA YG PURDUE LOGO.png'
import { useHistory } from 'react-router-dom';
 
 
 
 
import Posts from './components/Posts';
import Pagination from './components/Pagination';
 
 
 
import axios from 'axios';
import { useState, useEffect } from 'react';
{/* changed four sentences above*/}
 
function AnnouncementPage(props) {
 
    const history = useHistory()
 
    const routeChange=()=> {
        history.push('/posting');
    }
 
    {/*right here*/}
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(15);
 
 
 
    useEffect(() => {
        const fetchPosts = async () => {
            db
            .collection('Announcement')
            .orderBy('time','desc')
            .get()
            .then((collections) => {
                setLoading(true);
                const res = collections.docs.map((doc) => {
                    const test = doc.data();
                    test.id = doc.id
                    return test;
                });
                setPosts(res);
                setLoading(false);
            });
        }
 
        fetchPosts();
    }, []);
 
   
    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
 
    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
 
 
    return(
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
                {/*right here*/}
                <h2>Announcement</h2>
                <div>
                    <Posts posts={currentPosts} loading={loading} />
 
 
                    <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={posts.length}
                        paginate={paginate}
                    />
                </div>
 
 
                <div>
                    <Button onClick={routeChange}>Write</Button>
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
 
export default AnnouncementPage

