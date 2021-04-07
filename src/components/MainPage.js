import React from "react";
import HeaderComponent from "./HeaderComponent";
import Company from "./Company";
import "./styles/TextPage.css";

const MainPage = () => {
  return (
    <div>
      <HeaderComponent />
      <div>
        <h1>Tervetuloa CleanBuddyn etusivulle!</h1>
        <div className="TextContainer">
          <p>Tässä meillä tulee olemaan pikatarjouksia.</p>
        </div>
        <Company />
      </div>
    </div>
  );
};

export default MainPage;
