import './App.css';

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import MainPage from "./components/mainPage/mainPage"
import AboutPage from "./components/aboutPage/aboutPage"
import NewsPage from "./components/newsPage/newsPage"
import LoginPage from "./components/loginPage/loginPage"
import WriteNewsPage from "./components/writeNewsPage/writeNewsPage"
import PrivateRoute from "./components/privateRoute"

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
            <Route exact path="/events" render={() => {window.location.href="htmlPage/events+members/events.html"}} />
            <Route exact path="/members" render={() => {window.location.href="htmlPage/events+members/members.html"}} />
            <Route exact path="/calendar" render={() => {window.location.href="htmlPage/events+members/calendar.html"}} />
            <Route exact path="/news" component={NewsPage} />
            <Route exact path="/login" component={LoginPage} />
            <PrivateRoute exact path="/writeNews" component={WriteNewsPage} />
          </Switch>
        </div>
      </AuthProvider>
    </Router>
      
    //<MainPage></MainPage>
  );
}

export default App;
