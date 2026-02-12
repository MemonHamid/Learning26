import React from "react";
import { EmployeeList } from "./EmployeeList";

export const Employees = () => {
  var title = "EMPLOYEE APP";

  var compnay = {
    name: "TCS",
    year: 2026,
  };

  var employees = [
    { id: 101, name: "hamid", age: 23 },
    { id: 102, name: "hiren", age: 24 },
    { id: 103, name: "fiona", age: 25 },
    { id: 104, name: "jimit", age: 23 },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Employees</h1>
      {/* //title = {title}   key = {value}  */}
      <EmployeeList title={title} company={compnay} employees = {employees}></EmployeeList>
    </div>
  );
};