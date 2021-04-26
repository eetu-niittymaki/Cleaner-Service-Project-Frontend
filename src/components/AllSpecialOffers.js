import React from "react";
import "./styles/TextPage.css";
import SpecialOffer from "./SpecialOffer.js";

const AllSpecialOffers = () => {
  return (
    <div>
      <div>
        <SpecialOffer
          title="Perusteellinen kotisiivous"
          duration={4}
          description="Nullam auctor interdum nibh, ut ultricies purus suscipit non. Integer mattis mollis feugiat. Duis fringilla orci interdum, facilisis ex vitae, tempus turpis. Donec imperdiet, urna ac euismod dapibus, magna metus convallis risus, sed rhoncus diam risus at risus."
          companyName="Siivouspojat Ky"
          price={99}
        />
      </div>
    </div>
  );
};

export default AllSpecialOffers;
