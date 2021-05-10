import React, { useState, useEffect } from "react";
import "./styles/TextPage.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
import BackendConnection from "./BackendConnection";
import AdminModifyCompanyData from "./AdminModifyCompanyData";
import AdminModifyCustomerData from "./AdminModifyCustomerData";
import AdminModifyOfferData from "./AdminModifyOfferData";
import AddSupplier from "./AddSupplier";

const useStyles = makeStyles((theme) => ({
  formControl: {
    //margin: theme.spacing(1),
    minWidth: "100%",
    marginBottom: theme.spacing(2),
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const AdminPage = () => {
  const styles = useStyles();
  const customersTxt = "Asiakkaat";
  const companiesTxt = "Palveluntarjoajat";
  const offersTxt = "Pikatarjoukset";
  //placeholder text
  const supplierTxt = "Lisää yritys";

  const [adminRights, setAdminRights] = useState(false);
  const [selectedPage, setSelectedPage] = useState(customersTxt);
  const [customers, setCustomers] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [offers, setOffers] = useState([]);
  //const []

  useEffect(() => {
    const checkIfAdmin = async () => {
      //TODO
      //check from backend if current user has admin rights
      const getAdmin = localStorage.getItem("admin")
      if (getAdmin) {
        setAdminRights(true);
      }
    };
    checkIfAdmin();
    if (adminRights) {
      fetchData();
    }
  }, [adminRights, selectedPage]);

  const fetchData = async () => {
    try {
      const customersListed = await BackendConnection.getAllCustomers();
      const companiesListed = await BackendConnection.getAllCompanies();
      const offersListed = await BackendConnection.getAllSpecialOffers();
      setCustomers(customersListed);
      setCompanies(companiesListed);
      setOffers(offersListed);
    } catch (err) {
      console.log(err);
    }
  };
  /*
ustomer_id,
  customer_firstName,
  customer_lastName,
  customer_streetAddress,
  customer_city,
  customer_postCode,
  customer_phone,
  customer_email, */
  const modifyCustomer = async (id) => {
    //await BackendConnection.modifyCustomer(id).then
    //setSelectedPage([]);
    console.log(id)
    setSelectedPage(customersTxt);
  };
  const modifyCompany = () => {
    //await BackendConnection.modifyCompany(id).then
    //setSelectedPage([]);
    setSelectedPage(companiesTxt);
  };
  const modifyOffer = () => {
    //await BackendConnection.modifyOffer(id).then
    //setSelectedPage([]);
    setSelectedPage(offersTxt);
  };

  const deleteCustomer = async (id) => {
    await BackendConnection.deleteCustomer(id).then;
    setSelectedPage([]);
    setSelectedPage(customersTxt);
  };
  const deleteCompany = async (id) => {
    await BackendConnection.deleteSupplier(id).then;
    setSelectedPage([]);
    setSelectedPage(companiesTxt);
  };

  const deleteOffer = async (id) => {
    await BackendConnection.deleteOffer(id).then;
    setSelectedPage([]);
    setSelectedPage(offersTxt);
  };
  /*
  customer_id,
  customer_firstName,
  customer_lastName,
  customer_streetAddress,
  customer_city,
  customer_postCode,
  customer_phone,
  customer_email,
*/
  const getContent = (selectedP) => {
    if (selectedP == customersTxt) {
      return (
        <div>
          <h1>Muokkaa asiakastietoja:</h1>

          {customers.map((data) => (
            <ul key={data.customer_id}>
              <AdminModifyCustomerData
                cData={data}
                cSave={() => modifyCustomer(data.customer_id)}
                cDelete={() => deleteCustomer(data.customer_id)}
              />
            </ul>
          ))}
        </div>
      );
    } else if (selectedPage == companiesTxt) {
      return (
        <div>
          <h1>Muokkaa yritystietoja:</h1>

          {companies.map((data) => (
            <ul key={data.supplier_id}>
              <AdminModifyCompanyData
                cData={data}
                cSave={() => modifyCompany(data.supplier_id)}
                cDelete={() => deleteCompany(data.supplier_id)}
              />
            </ul>
          ))}
        </div>
      );
    } else if (selectedPage == offersTxt) {
      //product_id
      return (
        <div>
          <h1>Muokkaa tarjoustietoja:</h1>
          {/*product_id*/}
          {offers.map((data) => (
            <ul key={data.product_id}>
              <AdminModifyOfferData
                oData={data}
                oSave={() => modifyOffer(data.product_id)}
                oDelete={() => deleteOffer(data.product_id)}
              />
            </ul>
          ))}
        </div>
      );
    } else if (selectedPage == supplierTxt) {
      return (
        <div>
          <AddSupplier />
        </div>
      );
    }
    // works as a pageswitcher -> reload data (useEffect)
    else {
      return (
        <div>
          <p>Loading</p>
        </div>
      );
    }
  };

  return (
    <div>
      {adminRights ? (
        <div>
          <div>
            <br />
            <Button
              variant="contained"
              size="large"
              color={selectedPage == supplierTxt ? "primary" : "default"}
              onClick={() => setSelectedPage(supplierTxt)}
            >
              {supplierTxt}
            </Button>
            <Button
              variant="contained"
              size="large"
              color={selectedPage == customersTxt ? "primary" : "default"}
              onClick={() => setSelectedPage(customersTxt)}
            >
              {customersTxt}
            </Button>
            <Button
              variant="contained"
              size="large"
              color={selectedPage == companiesTxt ? "primary" : "default"}
              onClick={() => setSelectedPage(companiesTxt)}
            >
              {companiesTxt}
            </Button>
            <Button
              variant="contained"
              size="large"
              color={selectedPage == offersTxt ? "primary" : "default"}
              onClick={() => setSelectedPage(offersTxt)}
            >
              {offersTxt}
            </Button>
            <br />
            {getContent(selectedPage)}
          </div>
        </div>
      ) : (
        <div>
          <p>Not Admin user</p>
        </div>
      )}
    </div>
  );
};
export default AdminPage;
