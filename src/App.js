import './App.css';

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import MainPage from "./components/mainPage/mainPage"
import AboutPage from "./components/aboutPage/aboutPage"
import CalendarPage from "./components/calendarPage/calendarPage"
import MembersPage from "./components/membersPage/membersPage"
import EventsPage from "./components/eventsPage/eventsPage"
import ResearchPage from "./components/researchPage/researchPage"
import AnnouncementPage from "./components/announcementPage/announcementPage"
import SubPage from "./components/subPage"

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
        <div className="App">
          {/* <Base></Base> */}
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/events" component={EventsPage} />
            <Route exact path="/members" component={MembersPage} />
            <Route exact path="/calendar" component ={CalendarPage} />
            <Route exact path="/research" component ={ResearchPage} />
            <Route exact path="/announcement" component ={AnnouncementPage} />
          </Switch>
        </div>
      </Router>
    //<MainPage></MainPage>
  );
}

export default App;
