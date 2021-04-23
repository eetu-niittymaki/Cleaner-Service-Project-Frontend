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

const App = () => {
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
            <CustomerFront />
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
      </Switch>
    </BrowserRouter>
  );
};

export default App;
