import React from "react";
import HeaderComponent from "./HeaderComponent";
import Company from "./Company";

const CompaniesPage = (props) => {
  const companyList = props.allCompanies.map((company) => {
    return (
      <Company
        name={company.name}
        address={company.streetAddress}
        postnumber={company.postcode}
        city={company.city}
        phonenumber={company.phone}
        email={company.email}
        description={company.supplierDescription}
      />
    );
  });
  return (
    <div>
      <HeaderComponent />
      <div>
        <h1>Palveluntarjoajat:</h1>
        {companyList}
        {/* <Company
          name="Yritys Oy"
          address="Mäkikatu 3"
          postnumber="33100"
          city="Tampere"
          phonenumber="040 81544734"
          email="info@yritys.com"
          description="Phasellus tristique massa eget arcu mollis pellentesque. Maecenas imperdiet blandit lobortis. Aenean scelerisque in ipsum quis lacinia. Nullam auctor interdum nibh, ut ultricies purus suscipit non. Integer mattis mollis feugiat. Duis fringilla orci interdum, facilisis ex vitae, tempus turpis. Donec imperdiet, urna ac euismod dapibus, magna metus convallis risus, sed rhoncus diam risus at risus."
        />
        <Company
          name="Siivouspojat Ab"
          address="Liinakatu 33"
          postnumber="33450"
          city="Tampere"
          phonenumber="040 81534734"
          email="asiakaspalvelu@siivouspojat.fi"
          description="Phasellus tristique massa eget arcu mollis pellentesque. Maecenas imperdiet blandit lobortis. Aenean scelerisque in ipsum quis lacinia. Nullam auctor interdum nibh, ut ultricies purus suscipit non. Integer mattis mollis feugiat. Duis fringilla orci interdum, facilisis ex vitae, tempus turpis. Donec imperdiet, urna ac euismod dapibus, magna metus convallis risus, sed rhoncus diam risus at risus."
        />
        <Company
          name="DuuniaPukkaa Ky"
          address="Kylmäsenkuja 167 b"
          postnumber="33150"
          city="Valkeakoski"
          phonenumber="040 66544734"
          email="reiska@yahoo.com"
          description="Phasellus tristique massa eget arcu mollis pellentesque. Maecenas imperdiet blandit lobortis. Aenean scelerisque in ipsum quis lacinia. Nullam auctor interdum nibh, ut ultricies purus suscipit non. Integer mattis mollis feugiat. Duis fringilla orci interdum, facilisis ex vitae, tempus turpis. Donec imperdiet, urna ac euismod dapibus, magna metus convallis risus, sed rhoncus diam risus at risus."
        /> */}
      </div>
    </div>
  );
};

export default CompaniesPage;
