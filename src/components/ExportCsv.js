import React from "react";
import FileSaver from "file-saver";
var XLSX = require("xlsx");
function ExportCsv({ csvData, fileName, wscols }) {
    const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

  const Heading = [
    {
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email",
      address: "Address",
      postcode: "Postcode"
    }
  ];

  const exportToCSV = (csvData, fileName, wscols) => {
    const ws = XLSX.utils.json_to_sheet(Heading, {
      header: ["firstName", "lastName", "email", "address", "postcode"],
      skipHeader: true,
      origin: 0 //ok
    });
    ws["!cols"] = wscols;
    XLSX.utils.sheet_add_json(ws, csvData, {
      header: ["firstName", "lastName", "email", "address", "postcode"],
      skipHeader: true,
      origin: -1 //ok
    });
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  return (
    <input type="button" variant="warning"
    onClick={e => exportToCSV(csvData, fileName, wscols)} value="Export XLSX">
    </input>
  )
}

export default ExportCsv;