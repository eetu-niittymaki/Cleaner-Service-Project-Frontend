import React from "react";
import HeaderComponent from "./HeaderComponent";
import "./styles/TextPage.css";
import AllSpecialOffers from "./AllSpecialOffers";

const MainPage = () => {
  return (
    <div>
      <HeaderComponent />
      <div>
        <h1>Tervetuloa CleanBuddyn etusivulle!</h1>
        <div className="TextContainer">
          <p>Tässä meillä tulee olemaan pikatarjouksia.</p>
        </div>
        <AllSpecialOffers />
      </div>
    </div>
  );
};

export default MainPage;
