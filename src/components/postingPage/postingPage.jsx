import './postingPage.css';

import firebase, {db, storage} from "../../firebase_setup"

import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'
import { Alert, Card, Form, ProgressBar, Modal } from 'react-bootstrap';

import logo from '../../assets/KSEA YG PURDUE LOGO.png'
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext'
import { useHistory } from 'react-router-dom';

function PostingPage(props) {

    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [category, setCategory] = useState("Announcement");
    const [postConfirm, setPostConfirm] = useState("");

    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);
    const [uploadInProgress, setIploadInProgress] = useState(false);

    const handleChooseFile = e => {
        if (e.target.files[0]) {
            setImage(e.target.files);
        }
    };

    async function handleLogout() {
        setError('')
        try {
            await logout()
            history.push('/login')
        } catch {
            setError('Failed to log out')
        }
    }

    const uploadImage = (singleImage) => {
        return new Promise((res, rej) => {
            const uploadTask = storage.ref(`${category}/` + singleImage.name).put(singleImage);
            uploadTask.on(
                "state_changed",
                snapshot => {
                    const progress = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                    setProgress(progress);
                },
                error => {
                    rej(error);
                },
                async () => {
                    const url = await storage.ref(category).child(singleImage.name).getDownloadURL();
                    res(url);
                }
            );
        });
        
    }

    const handlePost = async () => {
        try {
            setIploadInProgress(true);
            const urlList = [];
            if (image != null) {
                for (var i = 0; i < image.length; i++) {
                    const url = await uploadImage(image[i]);
                    urlList.push(url);
                    setProgress(0);
                }
                //const url = await uploadImage();
            }
            db.collection(category).add({
                title: title,
                text: text,
                time: firebase.firestore.Timestamp.now(),
                image: urlList,
            }).then(function(docRef) {
                setPostConfirm("Success")
                history.push('/announcement');
            }).catch(function(error) {
                setPostConfirm("Failed")
            })
            setIploadInProgress(false);
            db.collection("Data").doc(category).update({
                count: firebase.firestore.FieldValue.increment(1)
            });
        } catch (err) {
            console.log(err)
        }
    }

    return(
        <div>
            <div id="heading">
                <hr id="top_line"></hr>
                
                <div id='heading_text'>
                    <img width="420" height="132" src={logo} />
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
                        <Nav.Link id='nav_text'>Research</Nav.Link>
                    </Nav>
                </div>
            </div>
            <div id='body'>
                <div>
                    <Card>
                            {error && <Card.Body><Alert variant="danger">{error}</Alert></Card.Body>}
                    </Card>
                    <Button variant="link" onClick = {handleLogout}>Log Out</Button>
                </div>
                <div>
                    <Form>
                        <Form.Group as={Form.Row}>
                            <Form.Label>Title</Form.Label>
                            <Form.Control placeholder="Title" onChange={e => setTitle(e.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Categoty</Form.Label>
                            <Form.Control as="select" onChange={e => setCategory(e.target.value)}>
                                <option>Announcement</option>
                                <option>Research</option>
                                <option>Photo</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control as="textarea" rows={10} onChange={e => setText(e.target.value)}/>
                        </Form.Group>
                    </Form>
                    <input type="file" accept="image/*" multiple = {true} onChange={handleChooseFile} />
                    <Button className ='send' onClick={handlePost}>Post</Button>
                </div>

                <Button className ='contact'>Contact Us</Button>

                <Modal animation={false} show={uploadInProgress}>
                    <Modal.Body>
                        <ProgressBar now={progress} label={`${progress}%`}/>
                    </Modal.Body>
                </Modal>

                <footer>
                    KSEA YG Purdue
                    <br></br>
                    In 2020 by web dev team
                </footer>
            </div>
            
        </div>
    )
}

export default PostingPage