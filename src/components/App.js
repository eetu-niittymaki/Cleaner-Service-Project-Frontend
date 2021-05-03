import "./styles/App.css";
import React, { useState, useEffect } from "react";
import MainPage from "./MainPage";
import AdminPage from "./AdminPage";
import CompaniesPage from "./CompaniesPage";
import InfoPage from "./InfoPage";
import CustomerFront from "./CustomerFront";
import CompanyFront from "./CompanyFront";
import OrderForm from "./OrderForm";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivacyPolicy from "./PrivacyPolicy.js";
import OfferRequest from "./OfferRequest";
import CreateSpecialOffer from "./CreateSpecialOffer";
import MySpecialOffers from "./MySpecialOffers";
import CompanyOfferRequests from "./CompanyOfferRequests";
import HeaderComponent from "./HeaderComponent";
import ModifyCompanyData from "./ModifyCompanyData";
import BackendConnection from "./BackendConnection";
import ModifyCustomerData from "./ModifyCustomerData";
import CustomerOfferRequests from "./CustomerOfferRequests";
import Signup from "./Signup";
import AddSupplier from "./AddSupplier";

const App = () => {
  // const exampleCompanyData = {
  //   id: 1,
  //   name: "Yrityksen nimi",
  //   contactPerson: "Yhteyshenkilö",
  //   phone: "040 5544671",
  //   street_address: "Katuosoite 3",
  //   postcode: "36100",
  //   city: "Tampere",
  //   email: "example@email.com",
  //   description: "Tehdään loistavaa jälkeä",
  //};
  const [loggedInCompanyId, setLoggedInCompanyId] = useState(1);
  const [loggedInCustomerId, setLoggedInCustomerId] = useState(1);
  //const [loggedInCompany, setLoggedInCompany] = useState(exampleCompanyData);

  // useEffect(() => {
  //   const exampleCompanyData = {
  //     id: 1,
  //     name: "Yrityksen nimi",
  //     contactPerson: "Yhteyshenkilö",
  //     phone: "040 5544671",
  //     street_address: "Katuosoite 3",
  //     postcode: "36100",
  //     city: "Tampere",
  //     email: "example@email.com",
  //     description: "Tehdään loistavaa jälkeä",
  //   };
  //   // Load all companies from database and search with given props companyId
  //   const loadCompanyData = async () => {
  //     const temp = await BackendConnection.getAllCompanies();
  //     if (temp.length > 0) {
  //       temp.filter((comp) => comp.supplier_id === loggedInCompanyId);
  //       setLoggedInCompany(temp[0]);
  //     } else {
  //       setLoggedInCompany(exampleCompanyData);
  //     }
  //   };
  //   loadCompanyData();
  // }, [loggedInCompany, loggedInCompanyId]);

  const getToken = () => {
    const tokenToString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenToString);
    return userToken?.token; // Note to self, ? is the optional chaining operator, won't throw error if token is undefined.
  };

  // Set session token from storage if exists.
  const setToken = (userToken) => {
    sessionStorage.setItem("token", JSON.stringify(userToken));
  };

  if (!getToken) {
    return <HeaderComponent setToken={setToken} />;
  }
  return (
    <BrowserRouter>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/info">
          <div className="App">
            <InfoPage />
          </div>
        </Route>
        <Route exact path="/companies">
          <div className="App">
            <CompaniesPage />
          </div>
        </Route>
        <Route exact path="/offerRequest">
          <div className="App">
            <OfferRequest />
          </div>
        </Route>
        <Route exact path="/orderform">
          <div className="App">
            <OrderForm />
          </div>
        </Route>
        <Route exact path="/privacy">
          <div className="App">
            <PrivacyPolicy />
          </div>
        </Route>
        <Route exact path="/signup">
          <div className="App">
            <Signup />
          </div>
        </Route>
        <Route exact path="/mypage/customer/modifydata">
          <div className="App">
            <ModifyCustomerData customerId={loggedInCustomerId} />
          </div>
        </Route>
        <Route exact path="/mypage/customer/myofferrequests">
          <div className="App">
            <CustomerOfferRequests />
          </div>
        </Route>
        <Route exact path="/mypage/customer">
          <div className="App">
            <CustomerFront customerId={loggedInCustomerId} />
          </div>
        </Route>
        <Route exact path="/mypage/company/createspecialoffer">
          <div className="App">
            <CreateSpecialOffer companyId={loggedInCompanyId} />
          </div>
        </Route>
        <Route exact path="/mypage/company/myspecialoffers">
          <div className="App">
            <MySpecialOffers />
          </div>
        </Route>
        <Route exact path="/mypage/company/myofferrequests">
          <div className="App">
            <CompanyOfferRequests />
          </div>
        </Route>
        <Route exact path="/mypage/company/modifydata">
          <div className="App">
            <ModifyCompanyData companyId={loggedInCompanyId} />
          </div>
        </Route>
        <Route exact path="/mypage/company">
          <div className="App">
            <CompanyFront companyId={loggedInCompanyId} />
          </div>
        </Route>
        <Route exact path="/admin/addsupplier">
          <div className="App">
            <AddSupplier />
          </div>
        </Route>
        <Route exact path="/admin">
          <div className="App">
            <AdminPage />
          </div>
        </Route>
        <Route exact path="/">
          <div className="App">
            <MainPage />
          </div>
        </Route>
        <Route path="*">
          <div className="App">
            <MainPage />
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;