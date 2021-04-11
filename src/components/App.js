import "./styles/App.css";
import MainPage from "./MainPage";
import CompaniesPage from "./CompaniesPage";
import InfoPage from "./InfoPage";
import CustomerFront from "./CustomerFront";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PrivacyPolicy from "./PrivacyPolicy.js";
import OfferRequest from "./OfferRequest";
import HeaderComponent from "./HeaderComponent"

const App = () => {

  const getToken = () => {
    const tokenToString = sessionStorage.getItem('token')
    const userToken = JSON.parse(tokenToString)
    return userToken?.token     // Note to self, ? is the optional chaining operator, won't throw error if token is undefined.
  }

  // Set session token from storage if exists. 
  function setToken(userToken) {
    sessionStorage.setItem('token', JSON.stringify(userToken));
  }

  if (!getToken) {
    return <HeaderComponent setToken={setToken} />
  }
  return (
    <div className="App">
      <Router>
        <div>
          {/* <nav>
            <ul>
              <li>
                <Link to="/">Main Page</Link>
              </li>
              <li>
                <Link to="/info">About</Link>
              </li>
              <li>
                <Link to="/companies">List of Cleaning companies</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
            </ul>
          </nav> */}

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/info">
              <InfoPage />
            </Route>
            <Route path="/companies">
              <CompaniesPage />
            </Route>
            <Route path="/offerRequest">
              <OfferRequest />
            </Route>
            <Route path="/privacy">
              <PrivacyPolicy />
            </Route>
            <Route path="/myPages">
              <CustomerFront />
            </Route>
            <Route path="/">
              <MainPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
