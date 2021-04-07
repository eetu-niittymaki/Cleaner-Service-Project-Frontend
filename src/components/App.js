import HeaderComponent from "./HeaderComponent.js";
import Company from "./Company.js";
import "./styles/App.css";
import MainPage from "./MainPage";
import CompaniesPage from "./CompaniesPage";
import InfoPage from "./InfoPage";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  const pages = ["front", "companies", "offerRequest", "info", "gdpr"];
  const [currentPage, setCurrentPage] = useState(pages[0]);

  const onChangePage = (nav) => {
    if (nav === "/palveluntarjoajat") {
      console.log("Browsing cleaning companies");
      setCurrentPage(pages[1]);
    } else if (nav === "/tarjouspyynto") {
      console.log("Asking for custom offer");
      setCurrentPage(pages[2]);
    } else if (nav === "/info") {
      console.log("Getting additional info");
      setCurrentPage(pages[3]);
    } else if (nav === "/pikatarjoukset") {
      console.log("Getting additional info");
      setCurrentPage(pages[0]);
    } else if (nav === "/tietosuojaseloste") {
      console.log("Getting additional info");
      setCurrentPage(pages[4]);
    }
  };

  useEffect(() => {
    console.log("Changed page now!");
  }, [currentPage]);

  return (
    <div className="App">
      <Router>
        <div>
          <nav>
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
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/info">
              <InfoPage />
            </Route>
            <Route path="/companies">
              <CompaniesPage />
            </Route>
            <Route path="/">
              <MainPage />
            </Route>
          </Switch>
        </div>
      </Router>
      {/* <HeaderComponent onChangePage={onChangePage} />
       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="pageContent">
        <h1>Current page: {currentPage}</h1>
        <p>Sisältöä ja muuta härpäkettä jne lorem ipsum yms..</p>
      </div>
      <Company />*/}
    </div>
  );
};

export default App;
