import "./styles/App.css";
import MainPage from "./MainPage";
import AdminPage from "./AdminPage";
import CompaniesPage from "./CompaniesPage";
import InfoPage from "./InfoPage";
import CustomerFront from "./CustomerFront";
import CompanyFront from "./CompanyFront";
import OrderForm from "./OrderForm";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
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
    <BrowserRouter>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/info">
          <InfoPage />
        </Route>
        <Route exact path="/companies">
          <CompaniesPage allCompanies={companies} />
        </Route>
        <Route exact path="/offerRequest">
          <OfferRequest />
        </Route>
        <Route exact path="/orderform">
          <OrderForm />
        </Route>
        <Route exact path="/privacy">
          <PrivacyPolicy />
        </Route>
        <Route exact path="/mypage/customer">
          <CustomerFront />
        </Route>
        <Route exact path="/mypage/company">
          <CompanyFront />
        </Route>
        <Route exact path="/admin">
          <AdminPage />
        </Route>
        <Route exact path="/">
          <MainPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
/*
let ui = products.map((prod) => (
  <li key={prod.product_id}>
    {prod.name} - {prod.product_name} - {prod.product_description} - {prod.product_price}€
  </li>*/
