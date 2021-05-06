import { Button } from "@material-ui/core";
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

const CustomerOfferRequests = ({ customerEmail }) => {
  const styles = useStyles();
  const [offerRequests, setOfferRequests] = useState([]);

  const email = "Siivouspojat";

  // TODO: change this to search offers by customer email
  const loadOfferRequests = async () => {
    console.log("loading offer request now once");
    let offerReqs = await BackendConnection.getOfferRequestsBySupplier(email);
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
        <CompOffReqBox key={req.request_id} offerReq={req} isCompany={false} />
      );
    });
  };

  if (offerRequests.length === 0) {
    return (
      <div>
        <h3>Ei tarjouspyyntöjä vielä.</h3>
        <Button
          variant="outlined"
          size="large"
          color="primary"
          onClick={() => (window.location.href = "/mypage/customer")}
        >
          Takaisin
        </Button>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Tässä saapuneet tarjouspyynnöt:</h1>
        {showOfferList()}
        <Button
          variant="outlined"
          size="large"
          color="primary"
          onClick={() => (window.location.href = "/mypage/customer")}
        >
          Takaisin
        </Button>
      </div>
    );
  }
};

export default CustomerOfferRequests;
