import React, { useState, useEffect } from "react";
import HeaderComponent from "./HeaderComponent";
import "./styles/TextPage.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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
  const [adminRights, setAdminRights] = useState(false);
  const checkIfAdmin = () => {
    //TODO
    //check from backend if current user has admin rights
    setAdminRights(true);
  };
  const getCompanies = () => {
    //TODO get company (etc ) lists from backend
    const data = [
      {
        id: "0",
        name: "exampleCompany1",
        contactPerson: "pena",
        phoneNumber: "123",
        address: "kujalla",
        postNumber: "321",
        city: "Bollywood",
        email: "maili@maili",
        description: "hieno yritys",
      },
      {
        id: "1",
        name: "exampleCompany2",
        contactPerson: "pena",
        phoneNumber: "123",
        address: "kujalla",
        postNumber: "321",
        city: "Bollywood",
        email: "maili@maili",
        description: "hieno yritys",
      },
    ];
    return data;
  };
  useEffect(() => {
    checkIfAdmin();
  }, []);
  return (
    <div>
      {adminRights ? (
        <div>
          <HeaderComponent />
          <div>
            <h1>Edit Companies</h1>
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
