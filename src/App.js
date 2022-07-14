import React, { useState } from "react";
import ExportCSV from "./components/ExportCsv";


// generate customer objects

const App = () => {
  const [customers, setCustomers] = useState(customersData());

  function customersData() {
    const custs = [];
    for (let i = 0; i <= 25; i++) {
      custs[i] = {
        firstName: `firstname${i}`,
        lastName: `lastname${i}`,
        email: `mail${i}@mail.com`,
        address: `#${i}, block name, floor #${i} street name, city name, state name`,
        postcode: `${i}0000`
      };
    }
    return custs;
  }

  const wscols = [
    { wch: Math.max(...customers.map(customer => customer.firstName.length)) },
    { wch: Math.max(...customers.map(customer => customer.lastName.length)) },
    { wch: Math.max(...customers.map(customer => customer.email.length)) },
    { wch: Math.max(...customers.map(customer => customer.address.length)) },
    {
      wch: Math.max(...customers.map(customer => customer.postcode.length)) + 3
    }
  ];

  console.log(Math.max(...customers.map(customer => customer.address.length)));

  return (
    <div className="App">
      <div className="row">
        <div className="col-md-8">
          <h2>Customers</h2>
        </div>
        <div className="col-md-4 center">
          <ExportCSV
            csvData={customers}
            fileName="Customers_Infomation_xlsx"
            wscols={wscols}
          />
        </div>
      </div>
    </div>
  );
};

export default App;