import React, { useState, useEffect } from "react";
import HeaderComponent from "./HeaderComponent";
import "./styles/TextPage.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios"
import BackendConnection from "./BackendConnection";
import AdminModifyCompanyData from "./AdminModifyCompanyData";
import AdminModifyCustomerData from "./AdminModifyCustomerData";
import AdminModifyUserData from "./AdminModifyUserData"

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
  const [adminRights, setAdminRights] = useState(false);
  const [selectedPage, setSelectedPage] = useState(customersTxt)
  const [customers, setCustomers] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    const checkIfAdmin = async () => {
      //TODO
      //check from backend if current user has admin rights
      const result = true;
      setAdminRights(result)
    };
    checkIfAdmin();
    console.log(adminRights);
    if (adminRights) {
      fetchData();
    }
  }, [adminRights]);

  const fetchData = async () => {
    try{
      const customersListed = await BackendConnection.getAllCustomers();
      const companiesListed = await BackendConnection.getAllCompanies();
      const offersListed = await BackendConnection.getAllSpecialOffers();
      setCustomers(customersListed);
      setCompanies(companiesListed);
      setOffers(offersListed);
      console.log(customers);
      //console.log(companies);
      //console.log(offers);
    } catch (err) {
      console.log(err)
    }
  }

  const getContent = (selectedP) => {
    console.log(selectedP)
    if(selectedP==customersTxt) {
      return(
        <div>
          
          
          {customers.map((data) => (
            <ul key={data.customer_id}>
              <p>{data.customer_id}</p>
              <AdminModifyCustomerData 
              cData = {data}
              cSave = {()=>console.log("cSave")} 
              cDelete = {()=>console.log("cDelete")} />
            </ul>
            
          ))}
          

        </div>
      )
    } else if(selectedPage==companiesTxt) {
      return(
        <div>
          <p>companies</p>
        </div>
      )
    } else if(selectedPage==offersTxt) {
      return(
        <div>
          <p>offers</p>
        </div>
      )
    }
    // this should never happen, but just in case
    else {
      return(
        <div>
          <p>What the fuck?</p>
        </div>
      )
    }
  }

  return (
    <div>
      {adminRights ? (
        <div>
          <HeaderComponent />
          <div>
            <br />
          <Button 
            variant="contained" 
            size="large" 
            color={selectedPage==customersTxt?"primary":"default"} 
            onClick={()=>setSelectedPage(customersTxt)}>
              {customersTxt}
          </Button>
          <Button 
            variant="contained" 
            size="large" 
            color={selectedPage==companiesTxt?"primary":"default"} 
            onClick={()=>setSelectedPage(companiesTxt)}>
              {companiesTxt}
          </Button>
          <Button 
            variant="contained" 
            size="large" 
            color={selectedPage==offersTxt?"primary":"default"} 
            onClick={()=>setSelectedPage(offersTxt)}>
              {offersTxt}
          </Button>
          <br />
          {getContent(selectedPage)}
            {/*
            {getCompanies().map((d) => (
              <ul key={d.id}>
                <div>
                  <form style={{ textAlign: "left" }}>
                    <TextField
                      InputLabelProps={{ shrink: true }}
                      className={styles.formControl}
                      label="Company name"
                      placeholder={d.name}
                      variant="outlined"
                    />
                    <TextField
                      InputLabelProps={{ shrink: true }}
                      className={styles.formControl}
                      label="Contact person"
                      placeholder={d.contactPerson}
                      variant="outlined"
                    />
                    <TextField
                      InputLabelProps={{ shrink: true }}
                      className={styles.formControl}
                      label="PhoneNumber"
                      placeholder={d.phoneNumber}
                      variant="outlined"
                    />
                    <TextField
                      InputLabelProps={{ shrink: true }}
                      className={styles.formControl}
                      label="Address"
                      placeholder={d.address}
                      variant="outlined"
                    />
                    <TextField
                      InputLabelProps={{ shrink: true }}
                      className={styles.formControl}
                      label="PostNumber"
                      placeholder={d.postNumber}
                      variant="outlined"
                    />
                    <TextField
                      InputLabelProps={{ shrink: true }}
                      className={styles.formControl}
                      label="City"
                      placeholder={d.city}
                      variant="outlined"
                    />
                    <TextField
                      InputLabelProps={{ shrink: true }}
                      className={styles.formControl}
                      label="Email"
                      placeholder={d.email}
                      variant="outlined"
                    />
                    <TextField
                      InputLabelProps={{ shrink: true }}
                      className={styles.formControl}
                      label="Description"
                      placeholder={d.description}
                      variant="outlined"
                    />
                  </form>
                  <Button variant="outlined" size="large" color="primary">
                    Save
                  </Button>
                  <Button variant="outlined" size="large" color="primary">
                    Delete
                  </Button>
                  <br />
                </div>
              </ul>
            ))}
            */}
          </div>
        </div>
      ) : (
        <div>
          <HeaderComponent />
          <p>Not Admin user</p>
        </div>
      )}
    </div>
  );
};
export default AdminPage;
