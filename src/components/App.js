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
  const [loggedInCompanyId, setLoggedInCompanyId] = useState(null);
  const [loggedInCustomerId, setLoggedInCustomerId] = useState(null);
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

  /* SessionStorage is not used now
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
  */
  

  /*
  const customerLogin = (id) => {
    console.log("changin customerId in app.js to " + id);
    setLoggedInCustomerId(id);
  };
  */

  useEffect(() => {
    const getCustomer = localStorage.getItem('user')
    if (getCustomer) {
      setLoggedInCustomerId(Number(getCustomer))
    }
  }, [loggedInCustomerId])

  useEffect(() => {
    const getCompany = localStorage.getItem('company')
    if (getCompany) {
      setLoggedInCompanyId(Number(getCompany))
    }
  }, [loggedInCompanyId])

  return (
    <BrowserRouter>
      <div className="App">
        <HeaderComponent />
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
          <Route path="/orderform/:id">
            <OrderForm />
            {/* <OrderForm specialOfferId={1} /> */}
          </Route>
          <Route exact path="/privacy">
            <PrivacyPolicy />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/mypage/customer/modifydata">
            <ModifyCustomerData customerId={loggedInCustomerId} />
          </Route>
          <Route exact path="/mypage/customer/myofferrequests">
            <CustomerOfferRequests />
          </Route>
          <Route exact path="/mypage/customer">
            <CustomerFront customerId={loggedInCustomerId} />
          </Route>
          <Route exact path="/mypage/company/createspecialoffer">
            <CreateSpecialOffer companyId={loggedInCompanyId} />
          </Route>
          <Route exact path="/mypage/company/myspecialoffers">
            <MySpecialOffers />
          </Route>
          <Route exact path="/mypage/company/myofferrequests">
            <CompanyOfferRequests />
          </Route>
          <Route exact path="/mypage/company/modifydata">
            <ModifyCompanyData companyId={loggedInCompanyId} />
          </Route>
          <Route exact path="/mypage/company">
            <CompanyFront companyId={loggedInCompanyId} />
          </Route>
          <Route exact path="/admin/addsupplier">
            <AddSupplier />
          </Route>
          <Route exact path="/admin">
            <AdminPage />
          </Route>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="*">
            <MainPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
