import "./styles/App.css";
import MainPage from "./MainPage";
import AdminPage from "./AdminPage";
import CompaniesPage from "./CompaniesPage";
import InfoPage from "./InfoPage";
import CustomerFront from "./CustomerFront";
import CompanyFront from "./CompanyFront";
import OrderForm from "./OrderForm";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PrivacyPolicy from "./PrivacyPolicy.js";
import OfferRequest from "./OfferRequest";
import BackendConnection from "./BackendConnection";

const App = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const exampleData = [
      {
        id: 1,
        name: "Siivouspojat Ab",
        contactPerson: "Jussi Mäkinen",
        phone: "040 5544671",
        streetAddress: "Mäkitie 3",
        postcode: "36100",
        city: "Tampere",
        email: "asiakaspalvelu@siivouspojat.fi",
        supplierDescription: "Tehdään loistavaa jälkeä",
      },
      {
        id: 2,
        name: "Duunia Pukkaa Ky",
        contactPerson: "Reiska Taipale",
        phone: "040 5544671",
        streetAddress: "Koivukuja 155",
        postcode: "13340",
        city: "Salo",
        email: "reiskahoitaa@yahoo.com",
        supplierDescription: "Siivotaan kun ehditään",
      },
    ];
    const loadCompanyList = async () => {
      try {
        const companiesListed = await BackendConnection.getAllCompanies();
        if (companiesListed.length === 0) {
          console.log(
            "Got empty list from backend, using example data instead"
          );
          setCompanies(exampleData);
        } else {
          setCompanies(companiesListed);
        }
      } catch (err) {
        alert("Problem with loading supplier data from database");
      }
    };
    loadCompanyList();
  }, []);

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
              <CompaniesPage allCompanies={companies} />
            </Route>
            <Route path="/offerRequest">
              <OfferRequest />
            </Route>
            <Route path="/orderform">
              <OrderForm />
            </Route>
            <Route path="/privacy">
              <PrivacyPolicy />
            </Route>
            <Route path="/mypage/customer">
              <CustomerFront />
            </Route>
            <Route path="/mypage/company">
              <CompanyFront />
            </Route>
            <Route path="/admin">
              <AdminPage />
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
/*
let ui = products.map((prod) => (
  <li key={prod.product_id}>
    {prod.name} - {prod.product_name} - {prod.product_description} - {prod.product_price}€
  </li>*/
