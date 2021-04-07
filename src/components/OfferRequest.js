import React from "react";
import HeaderComponent from "./HeaderComponent";
import "./styles/TextPage.css";

const OfferRequest = () => {
  return (
    <div>
      <HeaderComponent />
      <div>
        <h1>Pyydä tarjous:</h1>
        <div className="TextContainer">
          <p>Tässä meillä tulee olemaan tarjouspyyntölomake.</p>
        </div>
      </div>
    </div>
  );
};

export default OfferRequest;
