import "./styles/App.css";
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

const App = () => {
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
        <Route exact path="/mypage/customer">
          <div className="App">
            <CustomerFront customerId={1} />
          </div>
        </Route>
        <Route exact path="/mypage/company/createspecialoffer">
          <div className="App">
            <CreateSpecialOffer />
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
            <ModifyCompanyData />
          </div>
        </Route>
        <Route exact path="/mypage/company">
          <div className="App">
            <CompanyFront companyId={1} />
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
