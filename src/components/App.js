import "./styles/App.css";
import MainPage from "./MainPage";
import AdminPage from "./AdminPage";
import CompaniesPage from "./CompaniesPage";
import InfoPage from "./InfoPage";
import CustomerFront from "./CustomerFront";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import PrivacyPolicy from "./PrivacyPolicy.js";
import OfferRequest from "./OfferRequest";

const App = () => {
  return (
      <BrowserRouter>
        

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/info">
              <InfoPage />
            </Route>
            <Route exact path="/companies">
              <CompaniesPage />
            </Route>
            <Route exact path="/offerRequest">
              <OfferRequest />
            </Route>
            <Route exact path="/privacy">
              <PrivacyPolicy />
            </Route>
            <Route exact path="/myPages">
              <CustomerFront />
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
