import { Button, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState, useEffect } from "react";
import BackendConnection from "./BackendConnection";
import "./styles/TextPage.css";
import CompOffReqBox from "./CompOffReqBox";

const useStyles = makeStyles((theme) => ({
  backButton: {
    textAlign: "center",
  },
}));

const CompanyOfferRequests = ({ supplierName }) => {
  const styles = useStyles();
  const [offerRequests, setOfferRequests] = useState([]);

  const compName = "Siivouspojat";

  const loadOfferRequests = async () => {
    console.log("loading offer request now once");
    let offerReqs = await BackendConnection.getOfferRequestsBySupplier(
      compName
    );
    if (offerReqs.length > 0) {
      // Reverse result array because we want to show newest offer requests first
      offerReqs = offerReqs.reverse();
      setOfferRequests(offerReqs);
    }
  };

  useEffect(() => {
    loadOfferRequests();
  }, []);

  const showOfferList = () => {
    return offerRequests.map((req) => {
      return (
        <CompOffReqBox key={req.request_id} offerReq={req} isCompany={true} />
      );
    });
  };

  if (offerRequests.length === 0) {
    return <div>No offer requests yet.</div>;
  } else {
    return (
      <div>
        <h1>Tässä saapuneet tarjouspyynnöt:</h1>
        {showOfferList()}
        <Button
          variant="outlined"
          size="large"
          color="primary"
          onClick={() => (window.location.href = "/mypage/company")}
        >
          Takaisin
        </Button>
      </div>
    );
  }
};

export default CompanyOfferRequests;
