import React from "react";
import HeaderComponent from "./HeaderComponent";
import AllSpecialOffers from "./AllSpecialOffers";

const MainPage = () => {
  return (
    <div>
      <HeaderComponent />
      <div>
        <h1>Tervetuloa CleanBuddyn etusivulle!</h1>
        <h3>Tässä voimassaolevat pikatarjoukset, nappaa heti omasi.</h3>
        <AllSpecialOffers />
      </div>
    </div>
  );
};

export default MainPage;
