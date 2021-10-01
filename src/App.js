import './App.css';

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import MainPage from "./components/mainPage/mainPage"
import AboutPage from "./components/aboutPage/aboutPage"
import AnnouncementPage from "./components/announcementPage/announcementPage"
import LoginPage from "./components/loginPage/loginPage"
import PostingPage from "./components/postingPage/postingPage"
import CalendarPage from "./components/calendarPage/calendarPage"
import MembersPage from "./components/membersPage/membersPage"
import EventsPage from "./components/eventsPage/eventsPage"
import IndiPostPage from "./components/indiPostPage/indiPostPage"
import ResearchPage from "./components/researchPage/researchPage"
import PrivateRoute from "./components/privateRoute"
import PostPage from './components/postPage/postPage'

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from './context/AuthContext';



function App() {
  return (
    
    <Router>
      <AuthProvider>
        <div className="App">
          {/* <Base></Base> */}
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/events" component={EventsPage} />
            <Route exact path="/members" component={MembersPage} />
            <Route exact path="/calendar" component = {CalendarPage} />
            <Route exact path="/announcement" component={AnnouncementPage} />
            <Route exact path="/research" component={ResearchPage} />
            <Route exact path="/post/:postID" component={IndiPostPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/postPage/:postID" component={PostPage} />
            <PrivateRoute exact path="/posting" component={PostingPage} />
          </Switch>
        </div>
      </AuthProvider>
    </Router>
      
    //<MainPage></MainPage>
  );
}

export default App;
