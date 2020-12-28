import './App.css';

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import MainPage from "./components/mainPage/mainPage"
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
            <Route exact path="/sub" component={SubPage} />
            <Route exact path="/events" render={() => {window.location.href="eventAndMemberPage/events+members/events.html"}} />
            <Route exact path="/members" render={() => {window.location.href="eventAndMemberPage/events+members/members.html"}} />
          </Switch>
        </div>
      </Router>
    //<MainPage></MainPage>
  );
}

export default App;
