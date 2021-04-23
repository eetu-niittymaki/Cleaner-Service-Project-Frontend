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
  // const [companies, setCompanies] = useState([]);

  // useEffect(() => {
  //   const exampleData = [
  //     {
  //       id: 1,
  //       name: "Siivouspojat Ab",
  //       contactPerson: "Jussi Mäkinen",
  //       phone: "040 5544671",
  //       streetAddress: "Mäkitie 3",
  //       postcode: "36100",
  //       city: "Tampere",
  //       email: "asiakaspalvelu@siivouspojat.fi",
  //       supplierDescription: "Tehdään loistavaa jälkeä",
  //     },
  //     {
  //       id: 2,
  //       name: "Duunia Pukkaa Ky",
  //       contactPerson: "Reiska Taipale",
  //       phone: "040 5544671",
  //       streetAddress: "Koivukuja 155",
  //       postcode: "13340",
  //       city: "Salo",
  //       email: "reiskahoitaa@yahoo.com",
  //       supplierDescription: "Siivotaan kun ehditään",
  //     },
  //   ];
  //   const loadCompanyList = async () => {
  //     try {
  //       const companiesListed = await BackendConnection.getAllCompanies();
  //       if (companiesListed.length === 0) {
  //         console.log(
  //           "Got empty list from backend, using example data instead"
  //         );
  //         setCompanies(exampleData);
  //       } else {
  //         setCompanies(companiesListed);
  //       }
  //     } catch (err) {
  //       alert("Problem with loading supplier data from database");
  //     }
  //   };
  //   loadCompanyList();
  // }, []);

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
            {/*<CompaniesPage  allCompanies={companies} />*/}
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
/*
let ui = products.map((prod) => (
  <li key={prod.product_id}>
    {prod.name} - {prod.product_name} - {prod.product_description} - {prod.product_price}€
  </li>*/
