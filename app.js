import express from "express";
import employees, { getEmployees } from "#db/employees";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello employess!");
});

app.get("/employees", (req, res) => {
  const employees = getEmployees();
  res.send(employees);
});

export default app;
